import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';

import { capitalizeText } from '../../utils/capitalizeText';
import './OverallInfo.css';

export default class OverallInfo extends Component {

  state = {
    inputValue: this.props.cityInfo['name']
  }

  constructor(props) {
    super(props)      
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  static defaultProps = {
    cityInfo: {'name': 'Barcelona'},
    currentDay: '',
    descritpion: {}
  }

  static propTypes = {
    cityInfo: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired
  }


  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState({
          inputValue: e.target.value
        }
      )
    }
  }

  render () {
  console.log(this.props.cityInfo)

    // const cityName = this.props.cityInfo['name'];
    const country = this.props.cityInfo['country'];
    const currentDay = this.props.currentDay;
    const weatherDescription = this.props.description

    return (
      <Row>
        <Col>
          <input className="city-info"
                 name="cityName"
                 onKeyPress={this.handleKeyPress}
                 value={this.state.inputValue}
                 type="text"
          />
          <span>{country}</span>
          <p>{capitalizeText(currentDay)}</p>
          <p>{weatherDescription.weatherMain}, {weatherDescription.weatherDescription}</p>
        </Col>
      </Row>
    )
  }
}



