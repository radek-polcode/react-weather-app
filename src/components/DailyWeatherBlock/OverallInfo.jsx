import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';

import { capitalizeText } from '../../utils/capitalizeText';
import './OverallInfo.css';

export default class OverallInfo extends Component {
  static defaultProps = {
    cityInfo: {},
    currentDay: '',
    descritpion: {}
  }

  static propTypes = {
    cityInfo: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
  }

  render () {
    let cityName = this.props.cityInfo.name
    let country = this.props.cityInfo.country;
    let currentDay = this.props.currentDay;
    let weatherDescription = this.props.description

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
}



