import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import NavBar from './NavBar';
import Footer from './Footer';
import Todoindex from './Todoindex';





function App() {
  return (
 <>
    <NavBar/>
  
    <Switch>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/contact" component={Contact}></Route>
     <Route exact path="/about" component={About}></Route>
     <Route exact path="/service" component={Service}></Route>
     <Route exact path="/todo" component={Todoindex}></Route>
     <Redirect to="/"></Redirect>
   </Switch>

   <Footer/>
   
    

 </>
  );
}

export default App;
