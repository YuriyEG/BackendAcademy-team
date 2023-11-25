import React, { useState } from 'react';

import styles from './Lesson.module.css';

const Lesson = ({ lesson }) => {
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? { backgroundColor: 'rgb(152, 152, 152)', color: 'black' } : null;
  return (
    <div
      style={hoverStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.lesson}
    >
      <div className={styles.lesson__number}>{lesson.id + 1}</div>
      <div className={styles.lesson__title}>{lesson.title}</div>
      <div className={styles.lesson__next}>{'>>'}</div>
    </div>
  );
};

export default Lesson;
