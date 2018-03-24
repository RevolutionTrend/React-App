import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './fonts/iconfont.css';
import './frame/frame.css';

import PageTop from './frame/PageTop';
import SideBar from './frame/SideBar';
import CustomRouter from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageTop />
        </header>
        <BrowserRouter>
          <div className="App-body">
              <div className="body-side">
                <SideBar />
              </div>
              <div className="body-content">
                <CustomRouter />
              </div>
          </div>
        </BrowserRouter>
        <div className="App-footer">Copyright © 2017 React. All rights reserved.</div>
      </div>
    );
  }
}

export default App;
