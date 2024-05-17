import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            localStorage.setItem('password', password);
            setFullName('');
            setEmail('');
            setPassword('')
            setConfirmPassword('')
        } else {

        }
    }

    return (
        <>
            <section className={styles.section}>
                <form className={styles.form} onSubmit={handleSignUp}>
                    <div className={styles.headingSection}>
                        <p className={styles.title}>Register</p>
                        <p className={styles.message}>Signup now and get full access to our app.</p>
                    </div>
                    <div className={styles.labelSection}>
                        <div className={styles.labels}>
                            <input
                                className={styles.input}
                                type='text'
                                placeholder='Full Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className={styles.labels}>
                            <input
                                className={styles.input}
                                type='email'
                                placeholder='E-Mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.labels}>
                            <input
                                className={styles.input}
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.labels}>
                            <input
                                className={styles.input}
                                type='password'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.btnSection}>
                        <Link to='/logInPage'> <button className={styles.btn} type='submit'>SignUp</button></Link>
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
