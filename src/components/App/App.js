import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Lesson from '../Lesson/Lesson';
import LessonCard from '../LessonCard/LessonCard';
import data from '../../mockData/data';

import styles from './App.module.css';

const routerPaths = {
  base: '/',
  signIn: '/sign_in',
  signUp: '/sign_up',
  lessons: '/lessons',
  create: '/create',
  profile: '/profile',
  editProfile: '/profile/edit',
  notFound: '/not_found',
};

export const App = () => {
  return (
    <Router>
      <Switch>
        <div className={styles.app}>
          <div className={styles.app__header}>
            <Route path={routerPaths.base} render={() => <Header />} exact />
          </div>
          <Route
            path={routerPaths.signIn}
            exact
            render={() => <h1 style={{ color: 'white', height: '30px' }}>Страница входа</h1>}
          />
          <Route
            path={routerPaths.signUp}
            exact
            render={() => <h1 style={{ color: 'white' }}>Страница регистрации</h1>}
          />
          <Route
            exact
            path={routerPaths.base}
            render={() => (
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
            )}
          />

          <div className={styles.app__main}>
            <div className={styles.app__aside}></div>
            <div className={styles.app__content}>
              <Route path={`${routerPaths.lessons}/:id`} render={() => <LessonCard />} exact />
              <Route
                path={`${routerPaths.lessons}`}
                render={() => (
                  <div style={{ paddingLeft: 'auto', width: '100%' }}>
                    {data.map((lesson) => (
                      <div key={lesson.id}>
                        <Lesson key={lesson.id} lesson={lesson} />
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
          <div className={styles.app__footer}>
            <Route path={routerPaths.base} render={() => <Header />} exact />
          </div>
        </div>
        <Route render={() => <h1 style={{ color: 'white' }}>Вы перешли на несуществующую страницу</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
