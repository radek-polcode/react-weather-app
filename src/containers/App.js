import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBlock from '../components/WeatherBlock';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <WeatherBlock />
        </Container>
      </div>
    );
  }
}

export default App;
