import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest';

import './Search.css';
import CityListJson from '../../containers/city.list.min.json'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  console.log(value)
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength < 3) {
    return [];
  } else if (inputLength >= 3) {
    return CityListJson.filter(city =>
            city.name.toLowerCase().slice(0, inputLength) === inputValue
          )
  };
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}, {suggestion.country}
  </div>
);

export default class Search extends Component {
  state = {
    value: '',
    suggestions: []
  }

  static propTypes = {
    setCityId: PropTypes.func.isRequired
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onChange = (e, { newValue }) => {
    console.log(e)
    const setCityId = this.props.setCityId

    this.setState({
      value: newValue
    })

    // setCityId(cityId)
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a city',
      value,
      onChange: this.onChange,
      'data-city-id': value
    };
    console.log(inputProps)

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
