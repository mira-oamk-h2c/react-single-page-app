import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { Route, Switch } from 'react-router';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/header" component={Header} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
