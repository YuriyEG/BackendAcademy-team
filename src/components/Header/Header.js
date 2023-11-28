import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  LoginOutlined,
  BarsOutlined,
  LogoutOutlined,
  GithubOutlined,
  ControlOutlined,
  PieChartOutlined,
  SettingOutlined,
  HomeOutlined,
  DownSquareOutlined,
  UpSquareOutlined,
} from '@ant-design/icons';

import styles from './Header.module.css';

const Header = ({ history }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };

  // const isAuth = false && JSON.parse(localStorage.getItem('auth')).auth;
  const isAuth = true;
  return (
    <div className={styles.header}>
      <div className={styles.header__title} onClick={() => history.push('/')}>
        BackendAcademy
      </div>
      <div style={{ position: 'relative' }}>
        {open ? (
          <UpSquareOutlined className={styles.header__burger} onClick={openHandler} />
        ) : (
          <DownSquareOutlined className={styles.header__burger} onClick={openHandler} />
        )}
        {open ? (
          <div style={{ backgroundColor: 'black', position: 'absolute', left: '0' }}>
            {isAuth ? <HomeOutlined className={styles.header__burger} onClick={() => history.push('/')} /> : null}
            <SettingOutlined className={styles.header__burger} />

            {isAuth ? <PieChartOutlined className={styles.header__burger} /> : null}
            <ControlOutlined className={styles.header__burger} />
            {isAuth ? (
              <LogoutOutlined className={styles.header__burger} onClick={() => history.push('./sign-in')} />
            ) : null}

            {!isAuth ? (
              <LoginOutlined className={styles.header__burger} onClick={() => history.push('./sign-in')} />
            ) : null}

            {isAuth ? <GithubOutlined className={styles.header__burger} /> : null}
            {isAuth ? (
              <BarsOutlined className={styles.header__burger} onClick={() => history.push('/lessons')} />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(Header);
