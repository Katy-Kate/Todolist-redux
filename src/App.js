import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

          <TodoContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
