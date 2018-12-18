import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import SingleDayBlock from './SingleDayBlock';

export default class extends Component {
  state = {
    weeklyForecast: this.props.weeklyForecast,
    activeId: 0
  }
  
  static propTypes = {
    weeklyForecast: PropTypes.object.isRequired,
  }

  onDaySelect(index) {
    this.setState({
      activeId: index
    })
  }

  render() {
    const { weeklyForecast, activeId } = this.state;
    var onDaySelect = this.onDaySelect.bind(this)
    const SingleDaysBlock = Object.keys(weeklyForecast).map(function(key, index) {
      return <SingleDayBlock 
                key={index}
                blockIndex={index}
                dayName={key}
                dayilyWeatherInfo={weeklyForecast[key]}
                isActive={index === activeId}
                onSelect={onDaySelect}
                />
    })
    return (
      <Row>
        <Col>
          <h4>Weekly list</h4>
          {SingleDaysBlock}
        </Col>
      </Row>
    )
  }
}
