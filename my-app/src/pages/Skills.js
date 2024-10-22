// src/pages/Skills.js
import React from "react";
import styles from "../css/Skills.module.css"; // CSS 모듈 가져오기
import { FaReact, FaNodeJs, FaDatabase, FaAws } from "react-icons/fa";
import { SiExpo } from "react-icons/si";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact />, level: 65 },
        { name: "Next.js", icon: null, level: 0 },
        { name: "React Native", icon: <FaReact />, level: 50 },
        { name: "EXPO", icon: <SiExpo />, level: 50 },
        { name: "HTML/CSS", icon: null, level: 70 },
        { name: "JavaScript", icon: null, level: 70 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, level: 65 },
        { name: "AWS Lambda", icon: <FaAws />, level: 45 },
        { name: "API Gateway", icon: <FaAws />, level: 45 },
      ],
    },
    {
      category: "Database",
      items: [{ name: "DynamoDB", icon: <FaDatabase />, level: 40 }],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "AWS (General)", icon: <FaAws />, level: 30 },
        { name: "EXPO GO", icon: <SiExpo />, level: 60 },
        { name: "Git", icon: null, level: 65 },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {skills.map((skillCategory, index) => (
        <section key={index} className={styles.skillSection}>
          <h2>{skillCategory.category}</h2>
          {skillCategory.items.map((skill, idx) => (
            <div key={idx} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                {skill.icon && <div className={styles.icon}>{skill.icon}</div>}
                <p className={styles.skillName}>{skill.name}</p>
              </div>
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
