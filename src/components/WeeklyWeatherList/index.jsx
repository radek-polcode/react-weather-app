import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import SingleDayBlock from './SingleDayBlock';

export default class extends Component {
  state = {
    activeId: 0
  }
  
  static propTypes = {
    weeklyForecast: PropTypes.object.isRequired,
    fiveDaysForecast: PropTypes.object.isRequired
  }

  onDaySelect(index, selectedDay) {
    this.setState({
      activeId: index
    });

    this.props.setCurrentDay(selectedDay);
  }

  render() {
    const activeId = this.state.activeId;
    const weeklyForecast =  this.props.weeklyForecast
    const onDaySelect = this.onDaySelect.bind(this)

    //api
    const fiveDaysForecast = this.props.fiveDaysForecast

    const SingleDaysBlock = Object.keys(fiveDaysForecast).map(function(key, index) {
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
          {SingleDaysBlock}
        </Col>
      </Row>
    )
  }
}
