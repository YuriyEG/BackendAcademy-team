import React from 'react';

import Header from '../Header/Header';
import Lesson from '../Lesson/Lesson';

import styles from './App.module.css';

const fakeLessons = [
  { id: 0, title: 'Основы Node.js' },
  { id: 1, title: 'Потоки. Treads.' },
  { id: 2, title: 'RestAPI' },
  { id: 3, title: 'Чтение файлов' },
  { id: 4, title: 'Запись файлов' },
  { id: 5, title: 'Кэширование' },
  { id: 0, title: 'Express.js' },
  { id: 1, title: 'Запрос на сервер' },
  { id: 2, title: 'SQLite' },
  { id: 3, title: 'Bearer Token' },
  { id: 4, title: 'Урок 5' },
  { id: 5, title: 'Урок 6' },
];

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <Header />
      </div>
      <div className={styles.app__main}>
        <div className={styles.app__aside}></div>
        <div className={styles.app__content}>
          <div style={{ paddingTop: '40px' }}>
            {fakeLessons.map((lesson) => (
              <Lesson key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.app__footer}></div>
    </div>
  );
};

export default App;
