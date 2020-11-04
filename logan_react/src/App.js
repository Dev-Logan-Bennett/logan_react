import React from "react";
import "./App.scss";
import Store from './components/Store'
import Contact from './components/Contact'
import About from './components/About'
import Header from "./components/navigation/Header";
import Home from './components/Home'
import Footer from './components/navigation/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <>
      <Header />
      <div className="App">
        <main className="container-fliud">
          <Switch>
            <Route exact path="/about-us" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact-us" component={Contact} /> 
          </Switch>
        </main>
      </div>
      <Footer />
    </>
    </Router>
  );
}

export default App;
