import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';

import { createImageUrl } from '../../utils/createImageUrl';
import './DetailedInfo.css';

export default class DetailedInfo extends Component {
  static propTypes = {
    activeButtonChart: PropTypes.string.isRequired,
    currentDateTimeWeather: PropTypes.object.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  }
  static defaultProps = {
    activeButtonChart: '',
    currentDateTimeWeather: {}
  }

  handleOnClick(buttonName) {
    const onButtonClick = this.props.onButtonClick
    onButtonClick(buttonName)
  }

  render() {
    let activeButtonChart = this.props.activeButtonChart
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
            <p>Humidity: {humidity} %</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Wind: {wind} mps</p>
            <ButtonGroup>
              <Button className={activeButtonChart === 'temperatureButton' ? 'active' : '' }
                      name="temperatureButton"
                      size="sm"
                      onClick={this.handleOnClick.bind(this, 'temperatureButton')}>
                Temperature
              </Button>
              <Button className={activeButtonChart === 'pressureButton' ? 'active' : '' }
                      name="pressureButton"
                      size="sm"
                      onClick={this.handleOnClick.bind(this, 'pressureButton')}>
                Pressure
              </Button>
              <Button className={activeButtonChart === 'windButton' ? 'active' : ''}
                      name="windButton"
                      size="sm"
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
