import React from 'react';
// import { Progress } from 'antd';

import styles from './Starting.module.css';

const Starting = () => {
  return (
    <div className={styles.starting}>
      <div className={styles.title}>Backend Academy</div>
      {/* <div style={{ margin: '0 auto', width: '200px' }}>
        <Progress type="circle" percent={30} trailColor="rgb(20,20,20)" strokeColor="gray" size={200} />
      </div> */}
    </div>
  );
};

export default Starting;
