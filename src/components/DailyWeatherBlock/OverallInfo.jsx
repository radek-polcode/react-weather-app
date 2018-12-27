import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';

import { capitalizeText } from '../../utils/capitalizeText';
import './OverallInfo.css';

OverallInfo.defaultProps = {
  cityInfo: {},
  currentDay: '',
  descritpion: {}
}

function OverallInfo({ cityInfo, currentDay, description }) {
  OverallInfo.propTypes = {
    cityInfo: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired
  }
  const cityName = cityInfo['name'];
  const country = cityInfo['country'];
  const weatherDescription = description
  return (
    <Row>
      <Col>
        <h2 className="city-info">{cityName}, {country}</h2>
        <p>{capitalizeText(currentDay)}</p>
        <p>{weatherDescription.weatherMain}, {weatherDescription.weatherDescription}</p>
      </Col>
    </Row>
  )
}



export default OverallInfo

