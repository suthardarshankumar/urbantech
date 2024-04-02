import React from 'react';
import styles from './LogIn.module.css';

const Login = () => {
    return (
        <>
            <section className={styles.section}>
                <form className={styles.form}>
                    <p className={styles.title}>LogIn</p>
                    <p className={styles.message}>Welcome Back</p>
                    <label>
                        <input required placeholder="" type="email" className={styles.input} />
                        <span>Email</span>
                    </label>

                    <label>
                        <input required placeholder="" type="password" className={styles.input} />
                        <span>Password</span>
                    </label>
                    <button className={styles.submit}>LogIn</button>
                    <p className={styles.signin}>Forgot Password?</p>
                </form>
            </section>
        </>
    )
}

export default Login;