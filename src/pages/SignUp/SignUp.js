import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import styles from './SignUp.module.css';

const SignUp = () => {
    return (
        <>
            <section className={styles.section}>
                <form className={styles.form}>
                    <div className={styles.headingSection}>
                        <p className={styles.title}>Register</p>
                        <p className={styles.message}>Signup now and get full access to our app.</p>
                    </div>
                    <div className={styles.labelSection}>
                        <div className={styles.labels}>
                            <input className={styles.input} type='text' placeholder='Full Name' />
                        </div>
                        <div className={styles.labels}>
                            <input className={styles.input} type='email' placeholder='E-Mail' />
                        </div>
                        <div className={styles.labels}>
                            <input className={styles.input} type='password' placeholder='Password' />
                        </div>
                        <div className={styles.labels}>
                            <input className={styles.input} type='password' placeholder='Confirm Password' />
                        </div>
                    </div>
                    <div className={styles.btnSection}>
                        <button className={styles.btn}>SignUp</button>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.heading}>
                            Or SignUp with
                        </div>
                        <div className={styles.iconsSection}>
                            <div className={styles.iconContain}>
                                <FaGoogle className={styles.icon} />
                                <FaFacebookF className={styles.icon} />
                                <FaApple className={styles.icon} />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export default SignUp;
