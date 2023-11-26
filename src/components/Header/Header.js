import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>BackendAcademy</div>
      <Link to={'lessons'}>
        <div className={styles.header__burger}>≡</div>
      </Link>
    </div>
  );
};

export default Header;
