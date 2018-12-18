import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import SingleDayBlock from './SingleDayBlock';

export default class extends Component {
  state = {
    weeklyForecast: this.props.weeklyForecast,
  }
  
  static propTypes = {
    weeklyForecast: PropTypes.object.isRequired,
  }

  render() {
    const weeklyForecast = this.state.weeklyForecast;
    return (
      <Row>
        <Col>
          <h4>Weekly list</h4>
          {Object.keys(weeklyForecast).map(function(key, index) {
            return <SingleDayBlock 
                      key={index}
                      dayName={key}
                      dayilyWeatherInfo={weeklyForecast[key]}
                      />
          })}
        </Col>
      </Row>
    )
  }
}
