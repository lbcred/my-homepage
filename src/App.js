import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Home from './Views/Home.js';
import About from './Views/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Components/Navigation.js';

function App() {
  return (
    <div className="bg-gray-100 flex-col justify-around items-center">
      <Router>
        <Header/>
        <Navigation/>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/about'>
              <About/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
