import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Разработано командой BackendAcademy-team *</div>
      <div>Социальные сейти</div>
      <div>Написать в поддержку</div>
    </div>
  );
};

export default Footer;
