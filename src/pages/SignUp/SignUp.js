import React from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
    return (
        <>
            <section className={styles.section}>
                <form className={styles.form}>
                    <p className={styles.title}>Register</p>
                    <p className={styles.message}>Signup now and get full access to our app.</p>
                    <div className={styles.flex}>
                        <label>
                            <input required placeholder="" type="text" className={styles.input} />
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input required placeholder="" type="text" className={styles.input} />
                            <span>Lastname</span>
                        </label>
                    </div>

                    <label>
                        <input required placeholder="" type="email" className={styles.input} />
                        <span>Email</span>
                    </label>

                    <label>
                        <input required placeholder="" type="password" className={styles.input} />
                        <span>Password</span>
                    </label>
                    <label>
                        <input required placeholder="" type="password" className={styles.input} />
                        <span>Confirm password</span>
                    </label>
                    <button className={styles.submit}>Submit</button>
                    <p className={styles.signin}>Already have an account? <a href="#">Sign in</a></p>
                </form>
            </section>
        </>
    );
}

export default SignUp;
