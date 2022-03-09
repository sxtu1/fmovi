import { BrowserRouter as Router, Route } from 'react-router-dom';
import Preloader from "./components/Preloader";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Routing from './config/Routing';

function App(){
  return (
    <Router>
        <>
          <Preloader />
          <Login />
          <Register />
          <Header/>
          <Routing />
          <Footer />
        </>
    </Router>
  );
}

export default App;