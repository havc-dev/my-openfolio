import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

import './App.css';

function App(props) {
  const { home, about, projects, contact } = props.info;

  return (
    <>
    <div className="bg-overlay"></div>
    <div className="app-wrapper">
      { <Switch>
          <Route exact path='/'>
            <Home 
              info={home}
              />
          </Route>
          <Route path='/about'>
            <About
              info={about}
              />
          </Route>
          <Route path='/projects'>
            <Projects info={projects}/>
          </Route>
          <Route path='/contact'>
            <Contact info={contact}/>
          </Route>
      </Switch>}
    </div>
    </>
  );
}

export default App;
