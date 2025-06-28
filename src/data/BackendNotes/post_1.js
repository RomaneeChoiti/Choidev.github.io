const post_1 = {
  id: "post1",
  title: "EC2 ↔ RDS(PostgreSQL) 연결 문제 해결 정리",
  date: "2023/05/28",
  content: `

## 에러 메시지

\`\`\`
no pg_hba.conf entry for host ...
\`\`\`

- PostgreSQL이 외부 클라이언트(예: EC2의 앱 서버)의 접근을 거부
- 이유: 해당 클라이언트 IP, 사용자, DB에 대한 허용 규칙이 'pg_hba.conf'에 없음

---

## 문제의 출발점: PostgreSQL 15+ SSL 정책 강화

- 과거엔 SSL 없이도 접속 가능했지만,
- PostgreSQL 15 이후부터는 **비암호화 연결을 제한**

### 해결 방향
1. **테스트 환경**: SSL 설정을 비활성화
2. **배포 환경**: 클라이언트에서 SSL 인증서로 암호화된 연결 구성

---

## SSL 인증서 구성

### RDS CA 인증서 다운로드

- AWS에서 제공하는 번들: 'ap-northeast-2-bundle.pem'
- 개별 인증서 ('rds-ca-2019-root')를 따로 추출할 필요는 없음  
→ PostgreSQL 클라이언트가 번들에서 적절한 CA를 자동 선택

### Node.js SSL 설정

\`\`\`ts
const rdsCaCertPath = join(__dirname, '..', 'ap-northeast-2-bundle.pem');

ssl: {
  rejectUnauthorized: true,
  ca: fs.readFileSync(rdsCaCertPath).toString(),
}
\`\`\`

> 배포 버전에서는 dist 폴더 기준 경로로 수정 필요

---

## dist 폴더 내 pem 복사

### 'package.json' 스크립트 설정

\`\`\`json
"postbuild": "cp ap-northeast-2-bundle.pem dist/"
\`\`\`

→ 빌드 시 PEM 파일도 'dist/' 폴더에 포함되도록 함

---

## EC2에서 RDS 접속 테스트

### PostgreSQL 클라이언트 설치

\`\`\`bash
sudo apt update
sudo apt install postgresql-client -y
\`\`\`

### psql 접속 시도

\`\`\`bash
psql "host=YOUR_RDS_ENDPOINT port=5432 user=greenwayseoul dbname=greenwayseoul-rds sslmode=require"
\`\`\`

연결되면 SSL 설정은 문제 없음

---

## pem 키 페어 관련 설정

### 1. pem 권한 조정

\`\`\`bash
chmod 400 your-key.pem
\`\`\`

### 2. EC2에 pem 복사

\`\`\`bash
scp -i ~/test/test/test/EC2.pem ~/test/test/test/RDS.pem ubuntu@<EC2_PUBLIC_IP>:~/target-directory/
\`\`\`

→ EC2 내에서 'ls'로 확인하면 추가된 pem 파일을 볼 수 있음

---

## 보안 그룹 설정

- EC2 → RDS 접속을 허용하는 **인바운드 규칙** 설정 필요 (TCP 5432)
- RDS → EC2는 보통 아웃바운드로 자동 허용됨

### 현재 보안 그룹 구성

1. 'launch-wizard-1' : 포트 연결용
2. 'rds-ec2-1' : 인바운드 보안
3. 'ec2-rds-1' : 아웃바운드 보안
4. 'default' : 기본 설정

> 충돌은 없고, **중첩(합집합)** 으로 작동함  
→ 인바운드만 열려 있으면 연결 가능

---

## SSL 설정 진단을 위한 테스트

SSL 설정이 문제인지 보안 문제인지 확인 위해 아래 설정:

\`\`\`ts
ssl: {
  rejectUnauthorized: false
}
\`\`\`

→ 연결되면 보안 문제, 아니면 SSL 인증서 문제

---

## dist 내 pem 경로 문제 해결

### 발생 에러
\`\`\`bash
Error: EISDIR: illegal operation on a directory, read
\`\`\`

→ 잘못된 경로로 디렉토리를 읽으려 한 경우

### 해결

\`\`\`ts
const rdsCaCertPath = path.join(__dirname, 'ap-northeast-2-bundle.pem');
\`\`\`

→ '__dirname' 기준 경로를 명확하게 지정

---

## PM2 에러 해결

### 발생 에러
\`\`\`bash
Error: Cannot find module '/home/ubuntu/GreenWaySeoul/server/dist/main.js'
\`\`\`

### 점검 사항

1. 'dist/main.js' 존재 확인
2. 'tsconfig.json' 및 'tsconfig.build.jso'의 'outDir' 설정 확인
3. 'npm run build' 후 'dist/' 폴더 내부 구조 확인

### 스크립트 수정

\`\`\`json
"start:prod": "cross-env NODE_ENV=production pm2 start ./dist/main.js --interpreter node --name main"
\`\`\`

→ './dist/main.js' 경로를 **상대경로**로 수정하여 해결

---

## PM2 로그 초기화

### 로그 내용만 초기화
\`\`\`bash
npx pm2 flush
\`\`\`

### 로그 파일 전체 제거
\`\`\`bash
rm -rf ~/.pm2/logs/*
\`\`\`

→ 에러 로그 초기화로 문제 해결됨

---

## 최종 점검 요약

PostgreSQL의 SSL 인증서는 RDS 번들 전체를 적용해 문제를 해결함.
psql 클라이언트로 EC2에서 RDS에 직접 접속이 정상적으로 이루어짐을 확인함.
RDS의 보안 그룹 인바운드 설정에서 EC2의 IP가 5432 포트로 접근 가능하도록 허용함.
배포 시, 빌드 결과물(dist/) 안에 pem 인증서를 포함하도록 postbuild 스크립트로 자동 복사하게 구성함.
PM2 실행 문제는 파일 경로를 명확히 지정하고, 로그를 초기화하여 해결함.

---

## 정리
- PostgreSQL 15 이상부터 SSL 필수
- RDS 인증서 번들 설정 필수
- 'dist' 경로 기준으로 pem 복사 & 참조
- 보안 그룹/PM2/log 경로 확인 필수
`
};

export default post_1;
