import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';

import { createImageUrl } from '../../utils/createImageUrl';
import './DetailedInfo.css';

function DetailedInfo({ currentDayWeather }) {
  const dayDescription = currentDayWeather['description']
  const currentTemperature = currentDayWeather['temperature']['max']
  const conditions = currentDayWeather['conditions'] 
  return (
    <Row className="detailedInfo">
      <Col xs="6">
        <img
          className="detailedInfo__image" 
          src={createImageUrl('64', dayDescription)}>
        </img>
        <div className="detailedInfo__temperatureBlock">
          <span className="detailedInfo__currentTemperature">{currentTemperature}</span>
          <span className="detailedInfo__units">&deg;C | &deg;F</span>
        </div>
      </Col>
      <Col xs="6">
        <div className="detailedInfo__details">        
          <p>Precipitation: {conditions.precipitation} </p>
          <p>Humidity: {conditions.humidity}</p>
          <p>Wind: {conditions.wind}</p>
          <ButtonGroup>
            <Button size="sm">Temperature</Button>
            <Button size="sm">Precipitation</Button>
            <Button size="sm">Wind</Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  )
}

DetailedInfo.propTypes = {

}

export default DetailedInfo

