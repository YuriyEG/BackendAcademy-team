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
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>BackendAcademy</div>
      <div style={{ backgroundColor: 'black', position: 'absolute', right: '0' }}>
        {open ? (
          <DownSquareOutlined className={styles.header__burger} onClick={openHandler} />
        ) : (
          <UpSquareOutlined className={styles.header__burger} onClick={openHandler} />
        )}

        <HomeOutlined className={styles.header__burger} onClick={() => history.push('./')} />
        <SettingOutlined className={styles.header__burger} />
        <PieChartOutlined className={styles.header__burger} />
        <ControlOutlined className={styles.header__burger} />
        <LogoutOutlined className={styles.header__burger} onClick={() => history.push('./sign-in')} />
        <LoginOutlined className={styles.header__burger} onClick={() => history.push('./sign-up')} />
        <GithubOutlined className={styles.header__burger} />
        <BarsOutlined className={styles.header__burger} onClick={() => history.push('/lessons')} />
      </div>
    </div>
  );
};

export default withRouter(Header);
