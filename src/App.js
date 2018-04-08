import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


import User from './User'
import { Drawer } from 'material-ui';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "open": false,
    };
  }
  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    return (
      <MuiThemeProvider>
      <AppBar
      title="Yankeexe"
      iconClassNameRight="muidocs-icon-navigation-expand-more" 
      onLeftIconButtonClick={this.handleToggle}
            />

      <Drawer
        open={this.state.open}
        onRequestChange={(open)=> this.setState({open})}>
        <AppBar title = "It's Open!"
        onLeftIconButtonClick={this.handleToggle}
        />
      </Drawer>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        //New Component
        <User firstName = {firstName} lastName= {lastName} />

      </div>
    </MuiThemeProvider>
      
    );
  }
}

const firstName = "Yankee";
const lastName = " Maharjan";

export default App;
