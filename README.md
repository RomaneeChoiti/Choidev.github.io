# 블로깅 시 주의사항

#### 1. data에서는 export default설정을 해야한다 
    그렇지 않으면 loadNotesWithoutRequireContext함수에서 content를 읽지 못한다.
