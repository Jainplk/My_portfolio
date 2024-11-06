import React from 'react';
import getImageUrl from '../../utils';
import styles from "./About.module.css"

export default function About() {
    return (
        <section className={styles.container} id='about'>
            <h3 className={styles.title}>ABOUT ME</h3>
            <div className={styles.content}>
                <img src={getImageUrl("aboutImage.png")} alt="aboutImg" className={styles.aboutImg} />
                
               <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                          <p>
                          A recent post-graduate in MCA and highly motivated front-end developer. 
                          </p>
                          <br />
                          <p>Proficient in developing responsive, user-friendly
                          and visual appealing web application using Html, CSS, JavaScript and framework like React js. And also familiarity with Bootstarp, Material-UI, TailwindCSS and version control syatem.</p>
                          <br />
                          <p>I'm a quick learner and eager to apply my knowledge and skills to build innovative web applications.
                          </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                         <p>Thankyou for visiting my page!!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}