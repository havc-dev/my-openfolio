import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { AppContextProvider } from "./context/appContext";

function App() {

  return (
    <div className='app-wrapper'>
      <AppContextProvider>
        <Router>
        <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/projects'>
              <Projects />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route>Not found</Route>
          </Switch>
        <Footer />
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
