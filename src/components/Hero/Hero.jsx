import React from 'react';
import getImageUrl from '../../utils';
import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.hello}>HELLO !</h1>
                <h2 className={styles.title}>I AM PALAK JAIN</h2>
                <div className={styles.description}>
                    <p>
                    Creating responsive, user-friendly interfaces that delight!!
                    </p>
                    <h3>Inshort,</h3>
                    <p> Where creativity meets coding expertise :)</p>
                </div>
                <h5>Scroll for  More...</h5>
            </div>
            <img src={getImageUrl("heroImage.png")} alt="hero-image" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}