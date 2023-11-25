import React from 'react';

import Header from '../Header/Header';
import Lesson from '../Lesson/Lesson';
import LessonCard from '../LessonCard/LessonCard';
import data from '../../mockData/data';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <Header />
      </div>
      <div
        style={{
          color: 'white',
          height: 'auto',
          textAlign: 'center',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
        className={styles.app__header}
      >
        Открой дверь в мир Бэкенда с нашей образовательной платформой!
      </div>
      <div className={styles.app__main}>
        <div className={styles.app__aside}></div>
        <div className={styles.app__content}>
          <LessonCard />
          <div style={{ paddingLeft: 'auto', width: '100%' }}>
            {data.map((lesson) => (
              <div key={lesson.id}>
                <Lesson key={lesson.id} lesson={lesson} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.app__footer}>
        <Header />
      </div>
    </div>
  );
};

export default App;
