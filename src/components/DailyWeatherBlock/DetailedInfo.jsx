import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';

import { createImageUrl } from '../../utils/createImageUrl';
import './DetailedInfo.css';

export default class DetailedInfo extends Component {
  state = {
  }
  
  static propTypes = {
    currentDateTimeWeather: PropTypes.object.isRequired
  }
  static defaultProps = {
    currentDateTimeWeather: {}
  }

  render() {
    let currentDateTimeWeather = this.props.currentDateTimeWeather
    let humidity = currentDateTimeWeather['humidity']
    let imgCode = currentDateTimeWeather['imgCode']
    let pressure = currentDateTimeWeather['pressure']
    let temperature = currentDateTimeWeather['temperature']
    let wind = currentDateTimeWeather['wind']

    return (
      <Row className="detailedInfo">
        <Col xs="6">
          <img className="detailedInfo__image" 
              src={createImageUrl(imgCode)}
              alt="weather-thumbnail"
          >
          </img>
          <div className="detailedInfo__temperatureBlock">
            <span className="detailedInfo__currentTemperature">{temperature}</span>
            <span className="detailedInfo__units">&deg;C | &deg;F</span>
          </div>
        </Col>
        <Col xs="6">
          <div className="detailedInfo__details">    
            <p>Pressure: {pressure} hPa</p>
            <p>Humidity: {humidity} %</p>
            <p>Wind: {wind} mps</p>
            <ButtonGroup>
              <Button size="sm">
                Temperature
              </Button>
              <Button size="sm">Precipitation</Button>
              <Button size="sm">Wind</Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    )
  }
}
