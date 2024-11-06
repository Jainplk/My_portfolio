import React from "react";
import getImageUrl from "../../utils"
import styles from "./Contact.module.css"

export default function Contact(){
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel Free to reach out!</p>
            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("emailIcon.png")} alt="email Icon" />
                    <a href="mailto:jain.palak.0251@gmail.com">jain.palak.0251@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("githubIcon.png")} alt="github Icon" />
                    <a href="https://www.github.com/jainplk">github.com/@jainplk</a>
                </li>
            </ul>
        </footer>
    )
}