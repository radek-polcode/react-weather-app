import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';

import { capitalizeText } from '../../utils/capitalizeText';
import './OverallInfo.css';

export default class OverallInfo extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    searchValue: ''
  }

  static defaultProps = {
    cityInfo: {},
    currentDay: '',
    descritpion: {}
  }

  static propTypes = {
    cityInfo: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      searchValue: e.target.value
    })
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
          <input className="search-input"
                 name="cityName"
                 onChange={this.handleChange}
                 value={this.state.searchValue}
                 type="text"
                 placeholder="Type city name..."
          />
          <p>{capitalizeText(currentDay)}</p>
          <p>{weatherDescription.weatherMain}, {weatherDescription.weatherDescription}</p>
        </Col>
      </Row>
    )
  }
}



