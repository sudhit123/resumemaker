import React from "react";
import Header from './pages/header'
import Footer from './pages/footer';
import Home from './pages/home'
import About from './pages/about'
import Templates from './pages/templates'
import Contact from './pages/contact'
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route> 
          <Route path='/templates'>
            <Templates/>
          </Route> 
          <Route path='/contact'>
            <Contact/>
          </Route>
                                                                          
        </Switch>
          <Footer/>
      </Router>   
    </div>
  );
}
export default App;
