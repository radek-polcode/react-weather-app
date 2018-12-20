import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';

import { capitalizeText } from '../../utils/capitalizeText';
import './OverallInfo.css';

OverallInfo.defaultProps = {
  cityInfo: {},
  currentDay: '',
  currentDayWeather: {},
}

function OverallInfo({ cityInfo, currentDay, currentDayWeather }) {
  OverallInfo.propTypes = {
    cityInfo: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    currentDayWeather: PropTypes.object.isRequired,
  }
  const cityName = cityInfo['name'];
  const country = cityInfo['country'];
  const description = currentDayWeather['description'];
  return (
    <Row>
      <Col>
        <h2 className="city-info">{cityName}, {country}</h2>
        <p>{capitalizeText(currentDay)}</p>
        <p>{description}</p>
      </Col>
    </Row>
  )
}



export default OverallInfo

