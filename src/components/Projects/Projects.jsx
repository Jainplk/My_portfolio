import React from "react";
import projects from "../../data/projects.json"
import ProjectsCard from "./ProjectsCard";
import styles from "./Projects.module.css"

export default function Projects(){
    return(
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectsCard key={id} project={project} />
                        )
                    })
                }
            </div>
        </section>
    )
}