import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import TodoPage from "./Pages/TodoPage";
import Posts from "./Pages/Posts";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={Posts} />
          <Route path='/todos' component={TodoPage} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
