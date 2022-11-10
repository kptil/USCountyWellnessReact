import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Birth from './components/birth';
import Home from './components/home';
import Baseline from './components/baseline';
import {Helmet} from 'react-helmet';
import { Component } from 'react';

// UF Color Pallette: https://www.uff.ufl.edu/toolkit/branding-style/colors/

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };

  render () {
      return (
        <>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "Baseline Metrics" element = {<Baseline />} />
          <Route path = "Birth Metrics" element = {<Birth />} />
        </Routes>
        <div className="application">
            <Helmet>
                <style>{'body { background-color: white }'}</style>
            </Helmet>
        </div>
      
        </>
      );
  }
}

export default App;