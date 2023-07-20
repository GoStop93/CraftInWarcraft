import React from 'react';
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AppStyle } from './App.styles';

const Welcome = lazy(() => import('../src/routes/Welcome/Welcome'));
const Layout = lazy(() => import('../src/routes/Layout/Layout'));
const Page404 = lazy(() => import('../src/routes/Page404/Page404'));
const Main = lazy(() => import('../src/routes/Main/Main'));
const Class = lazy(() => import('../src/routes/Class/Class'));
const Race = lazy(() => import('../src/routes/Race/Race'));
const TimeLine = lazy(() => import('../src/routes/Timeline/Timeline'));
const Explorer = lazy(() => import('../src/routes/Explorer/Explorer'));

function App() {
  return (
    <Router>
        <AppStyle>
          <Suspense>
            <Layout>
              <Routes>
                  <Route path='/' element={<Welcome/>}/>
                  <Route path='/main' element={<Main/>}/>
                  <Route path='/main/class/:id' element={<Class />}/>
                  <Route path='/main/race/:id' element={<Race />}/>
                  <Route path='/timeline' element={<TimeLine />}/>
                  <Route path='/explorer' element={<Explorer />}/>
                  <Route path='*' element={<Page404/>}/>
              </Routes>
            </Layout>
          </Suspense>
        </AppStyle>
    </Router>
  );
};

export default App;

