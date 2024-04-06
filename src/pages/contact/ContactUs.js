import React from 'react';
import styles from './Contact.module.css';

const ContactUs = () => {
    return (
        <>
            <section className={styles.section}>
                <form className={styles.form}>
                    <div className={styles.headingSection}>
                        <p className={styles.title}>Contact Us</p>
                    </div>
                    <div className={styles.labelSection}>
                        <div className={styles.labels}>
                            <input className={styles.input} type='text' placeholder='Name' />
                        </div>
                        <div className={styles.labels}>
                            <input className={styles.input} type='email' placeholder='E-Mail' />
                        </div>
                        <div className={styles.labels}>
                            <textarea className={styles.message} placeholder='Your Message'></textarea>
                        </div>

                    </div>
                    <div className={styles.btnSection}>
                        <button className={styles.btn}>Send Message</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ContactUs;