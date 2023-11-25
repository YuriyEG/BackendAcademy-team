import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>BackendAcademy</div>
      <div className={styles.header__burger}>☰</div>
    </div>
  );
};

export default Header;
