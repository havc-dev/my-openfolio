import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

import './App.css';
// import background_jpg from './images/background.jpg';
// import background_webp from './images/background.webp';
// import background_avif from './images/background.avif';

function App(props) {
  // var sectionStyle = {
  //   width: "100%",
  //   height: "100vh",
  //   // backgroundImage: `url(${background_jpg})`,
  //   backgroundImage: `image-set(
  //     "${background_jpg}" type("image/jpg"),
  //     "${background_webp}" type("image/webp"),
  //     "${background_avif}" type("image/avif"),
  //   )`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center"
  // };

  const { home, about, projects, contact } = props.info;

  return (
    // <div className="app-wrapper"   style={ sectionStyle }>
    <div className="app-wrapper">
      <div className="bg-overlay">
      <NavBar />
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
    </div>
  );
}

export default App;
