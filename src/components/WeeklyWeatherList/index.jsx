import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import SingleDayBlock from './SingleDayBlock';

export default class extends Component {
  state = {
    activeId: 0,
    cityId: this.props.cityId
  }
  
  static propTypes = {
    fiveDaysForecast: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cityId !== this.state.cityId)
    this.setState({
      activeId: 0,
      cityId: nextProps.cityId
    })
}

  onDaySelect(index, selectedDay) {
    this.setState({
      activeId: index
    });

    this.props.setCurrentDay(selectedDay);
  }

  render() {
    const activeId = this.state.activeId;
    const onDaySelect = this.onDaySelect.bind(this)
    const fiveDaysForecast = this.props.fiveDaysForecast
    const SingleDaysBlock = Object.keys(fiveDaysForecast).map(function(key, index) {
      return <SingleDayBlock 
                blockIndex={index}
                dayName={key}
                dailyWeatherInfo={fiveDaysForecast[key]}
                key={index}
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
