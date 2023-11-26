import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import styles from './SignIn.module.css';

export default function SignIn() {
  return (
    <div className={styles.form}>
      <h2 className={styles.form__title}>Войти</h2>
      <form>
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" className={styles.form__input} placeholder="Email address" />
        <div className={styles.form__warning}>Ошибка!</div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className={styles.form__input} placeholder="Password" />
        <div className={styles.form__warning}>Ошибка!</div>
        <input type="submit" name="submit" className={styles.form__submit} id="submit" value="Login" />
      </form>
      <p className={styles.form__question}>
        Нет аккаунта?{''}
        <Link>Зарегистрируйтесь</Link>
      </p>
    </div>
  );
}
