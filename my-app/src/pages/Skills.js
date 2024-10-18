// src/pages/Skills.js
import React from "react";
import styles from "../css/Skills.module.css"; // CSS 모듈 가져오기
import { FaReact, FaNodeJs, FaDatabase, FaAws } from "react-icons/fa";
import { SiExpo } from "react-icons/si";

function Skills() {
  // 기술 목록 데이터
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact />, level: 70 },
        { name: "Next.js", icon: null, level: 0 },
        { name: "React Native", icon: <FaReact />, level: 70 },
        { name: "EXPO", icon: <SiExpo />, level: 65 },
        { name: "HTML/CSS", icon: null, level: 70 },
        { name: "JavaScript", icon: null, level: 70 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, level: 75 },
        { name: "AWS Lambda", icon: <FaAws />, level: 70 }, // AWS 아이콘 사용
        { name: "API Gateway", icon: <FaAws />, level: 70 }, // AWS 아이콘 사용
      ],
    },
    {
      category: "Database",
      items: [{ name: "DynamoDB", icon: <FaDatabase />, level: 65 }],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "AWS (General)", icon: <FaAws />, level: 75 },
        { name: "EXPO GO", icon: <SiExpo />, level: 70 },
        { name: "Git", icon: null, level: 70 },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>
      {skills.map((skillCategory, index) => (
        <section key={index} className={styles.skillSection}>
          <h2>{skillCategory.category}</h2>
          {skillCategory.items.map((skill, idx) => (
            <div key={idx} className={styles.skillItem}>
              {skill.icon && <div className={styles.icon}>{skill.icon}</div>}
              <p>{skill.name}</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default Skills;
