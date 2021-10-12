import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Home from './Views/Home.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
