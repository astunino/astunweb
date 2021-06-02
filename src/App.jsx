import logow from './logow.png';
import logocerveza from './logoca.png';
import logoIV from './logoIV.png';
import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Grid container item className="row-black">
          <Grid col item className="col-black">
            <img src={logocerveza} className="App-logow" alt="logoCA"/>
          </Grid>
          <Grid col item className="col-white">
            <img src={logoIV} className="App-logo" alt="logoIV"/>
          </Grid>
          <Grid col item className="col-black">
            <img src={logow} className="App-logow" alt="logo"/>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}

export default App;
