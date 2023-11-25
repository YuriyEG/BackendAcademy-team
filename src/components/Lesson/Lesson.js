import React, { useState } from 'react';

import styles from './Lesson.module.css';

const Lesson = ({ lesson }) => {
  const [hover, setHover] = useState(false);
  const hoverStyle = hover ? { backgroundColor: 'rgb(50,50,50)', color: 'white' } : null;

  const onHoverHandler = () => {
    setHover(true);
    setTimeout(() => {
      if (hover) {
        setHover(false);
      }
    }, 300);
  };
  return (
    <div
      style={hoverStyle}
      onMouseEnter={onHoverHandler}
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
