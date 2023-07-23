import { Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import { Layout } from './components';
import { BotBuilder, Home, NlpApps } from './pages';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/nlp-apps' element={<NlpApps />}/>
          <Route path='/bot-builder' element={<BotBuilder />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
