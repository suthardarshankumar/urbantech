import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import styles from './LogIn.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const storedPassword = localStorage.getItem('password');
        if (password === storedPassword) {
            alert('Login successful');
        } else {
            alert('Invalid password');
        }
    }

    return (
        <>
            <section className={styles.section}>
                <div className={styles.formContain}>
                    <form className={styles.form} onSubmit={handleLogin}>
                        <div className={styles.headingSection}>
                            <p className={styles.title}>LogIn</p>
                        </div>
                        <div className={styles.labelSection}>
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
                            <div className={styles.forgetPassword}>
                                <Link to='forget-password' className={styles.forgetPassword}>Forget Password</Link>
                            </div>
                        </div>
                        <div className={styles.btnSection}>
                            <Link to='/'>   <button className={styles.btn} type='submit'>LogIn</button> </Link>
                        </div>

                        <div className={styles.container}> <div className={styles.heading}>
                            Or LogIn with
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
                    <div className={styles.signupContainer}>
                        <div className={styles.headingSign}>
                            New at UrbanTech?
                        </div>
                        <div className={styles.signupbtn}>
                            <Link to='signUp'><button className={styles.signbtn}>SignUp</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
