import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest';

import './Search.css';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, cityListJson) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength < 3) {
    return [];
  } else if (inputLength >= 3) {
    return cityListJson.filter(city =>
            city.name.toLowerCase().slice(0, inputLength) === inputValue
          )
  };
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name + ', ' + suggestion.id;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}, {suggestion.country}
  </div>
);

export default class Search extends Component {
  state = {
    cityId: '',
    value: '',
    suggestions: []
  }

  static propTypes = {
    setCityId: PropTypes.func.isRequired
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const cityListJson = this.props.cityList
    this.setState({
      suggestions: getSuggestions(value, cityListJson)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onChange = (e, { newValue }) => {
    const setCityId = this.props.setCityId

    this.setState({
      value: newValue,
    })

    if (newValue.match(/[a-zA-Z]+,\s\d+/)){
      let cityId = newValue.match(/\d+/)[0]
      this.setState({
        cityId: cityId
      })
      setCityId(cityId)
    }

  }

  removeCityIdFromString (value) {
    if (value.match(/[a-zA-Z]+,\s\d+/)) {
      return value.match(/[a-zA-Z]+/)[0]
    } else {
      return value
    }
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a city',
      value: this.removeCityIdFromString(value),
      onChange: this.onChange,
    };

    return (
      <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </>
    )
  }
}
