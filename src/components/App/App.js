import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Lesson from '../Lesson/Lesson';
import LessonCard from '../LessonCard/LessonCard';
import Starting from '../Starting/Starting';
import data from '../../mockData/data';
import Overlay from '../Modal/Overlay';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

import styles from './App.module.css';

const routerPaths = {
  base: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  lessons: '/lessons',
  create: '/create',
  profile: '/profile',
  editProfile: '/profile/edit',
  notFound: '/not_found',
};

export const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const isAuth = true;

  return (
    <Router>
      <Modal>
        {loading ? (
          <Overlay>
            <Starting />
          </Overlay>
        ) : null}
      </Modal>{' '}
      <Switch>
        <div className={styles.app}>
          <div className={styles.app__header}>
            <Route path={routerPaths.base} render={() => <Header />} exact />
            <Route path={routerPaths.lessons} render={() => <Header />} exact />
          </div>
          <Route
            path={routerPaths.signIn}
            exact
            render={() => (
              <Modal>
                <Overlay>
                  <SignIn />
                </Overlay>
              </Modal>
            )}
          />
          <Route
            path={routerPaths.signUp}
            exact
            render={() => (
              <Modal>
                <Overlay>
                  <SignUp />
                </Overlay>
              </Modal>
            )}
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
            <div className={styles.app__aside}>
              <Route
                path={routerPaths.base}
                render={() => (
                  <div style={{ color: 'white', width: '100%', height: '100%', backgroundColor: 'rgb(10,10,10)' }}>
                    Aside content
                  </div>
                )}
              />
            </div>
            <div className={styles.app__content}>
              <Route path={`${routerPaths.base}`} render={() => <LessonCard />} exact />
              <Route
                path={`${routerPaths.lessons}`}
                render={() => (
                  <div style={{ paddingLeft: 'auto', width: '100%' }}>
                    {isAuth &&
                      data.map((lesson) => (
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
            <Route path={routerPaths.base} render={() => <Footer />} exact />
          </div>
        </div>
        <Route render={() => <h1 style={{ color: 'white' }}>Вы перешли на несуществующую страницу</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
