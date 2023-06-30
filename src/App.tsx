import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AppStyle } from './App.styles';
import { Welcome } from './routes/Welcome/Welcome';
import { Layout } from './routes/Layout/Layout';
import { Page404 } from './routes/Page404/Page404';
import { Main } from './routes/Main/Main';
import { Class } from './routes/Class/Class';
import { Race } from './routes/Race/Race';
import { TimeLine } from './routes/Timeline/Timeline';
import { Explorer } from './routes/Explorer/Explorer';

function App() {
  return (
    <Router>
        <AppStyle>
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
        </AppStyle>
    </Router>
  );
};

export default App;

