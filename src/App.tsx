import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AppStyle } from './App.styles';
import { Welcome } from '../src/routes/Welcome/Welcome';
import { TimeLine } from './routes/Timeline/Timeline';
import { Layout } from '../src/routes/Layout/Layout';
import { Page404 } from '../src/routes/Page404/Page404';
import { Main } from './routes/Main/Main';
import { Class } from '../src/routes/Class/Class';
import { Race } from '../src/routes/Race/Race';
import { Explorer } from '../src/routes/Explorer/Explorer';

function App() {
  return (
    <Router>
      <AppStyle>
        <Layout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/main" element={<Main />} />
            <Route path="/main/class/:id" element={<Class />} />
            <Route path="/main/race/:id" element={<Race />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </AppStyle>
    </Router>
  );
}

export default App;
