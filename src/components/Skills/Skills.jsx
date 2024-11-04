import React from "react";
import skills from "../../data/skills.json";
import getImageUrl from "../../utils";
import styles from "./Skills.module.css"

export default function Skills(){
    return (
       <section id="skills" className={styles.container}>
        <h2 className={styles.title}>SKILLS</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImgContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt="lang-Icon" />
                                </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
       </section>
    )
}