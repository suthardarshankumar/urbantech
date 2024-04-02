import React from 'react';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
    return (
        <>
            <section className={styles.section}>
                <form className={styles.form}>
                    <p className={styles.title}>Reset Password</p>
                    <label>
                        <input required placeholder="" type="email" className={styles.input} />
                        <span>Password</span>
                    </label>

                    <label>
                        <input required placeholder="" type="password" className={styles.input} />
                        <span>Confirm Password</span>
                    </label>
                    <button className={styles.submit}>Submit your request</button>
                </form>
            </section>
        </>
    )
}

export default ResetPassword;