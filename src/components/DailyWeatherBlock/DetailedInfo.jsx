import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';

import { createImageUrl } from '../../utils/createImageUrl';
import './DetailedInfo.css';

export default class DetailedInfo extends Component {
  state = {
  }

  static propTypes = {
    currentDateTimeWeather: PropTypes.object.isRequired,
    onButtonClick: PropTypes.func.isRequired
  }
  static defaultProps = {
    currentDateTimeWeather: {}
  }

  handleOnClick(buttonName) {
    console.log(buttonName)
    const onButtonClick = this.props.onButtonClick
    onButtonClick(buttonName)
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
              <Button size="sm"
                      name="temperatureButton"
                      onClick={this.handleOnClick.bind(this, 'temperatureButton')}>
                Temperature
              </Button>
              <Button size="sm"
                      name="precipitationButton"
                      onClick={this.handleOnClick.bind(this, 'precipitationButton')}>
                Precipitation
              </Button>
              <Button size="sm"
                      name="windButton"
                      onClick={this.handleOnClick.bind(this, 'windButton')}>
                Wind
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    )
  }
}
