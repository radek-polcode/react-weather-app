import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CityListJson from '../../containers/city.list.min.json'


export default class Search extends Component {
  state = {
    searchValue: ''
  }

  static propTypes = {
    setCityId: PropTypes.func.isRequired
  }


  handleChange(e) {
    let inputValue = e.target.value
    const setCityId = this.props.setCityId
    this.setState({
      searchValue: inputValue
    })
    let cityId = this.findCityId(inputValue)
    setCityId(cityId)
  }

  findCityId(cityName) {
    let result = CityListJson.filter(e => {
      if (e.name === cityName) {
        return e.id
      }
    })
    console.log(cityName)
    console.log(result)
  }

  render() {
    return (
      <>
        <input className="search-input"
               name="cityName"
               onChange={this.handleChange.bind(this)}
               value={this.state.searchValue}
               type="text"
               placeholder="Type city name..."
          />
      </>
    )
  }
}
