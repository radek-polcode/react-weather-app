import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyWeatherBlock from '../components/DailyWeatherBlock';
import Header from '../components/Header';
import WeatherDataParser from '../services/WeatherDataParser';
import WeeklyWeatherList from '../components/WeeklyWeatherList';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const forecast5link = 'https://api.openweathermap.org/data/2.5/forecast?id='
const apiKey = 'a23d2967a22cfa9a510a2c630aa76206'
const units = '&units=metric'
class App extends Component {
  constructor (props) {
    super(props)
    this.setCityId.bind(this)
  }

  state = {
    cityId: '3094802',
    cityList: [],
    currentDateTime: new Date().getTime(),
    currentDateTimeWeather: {},
    fiveDaysForecast: {},
    overallCityInfo: {},
  }

  static propTypes = {}
  static defaultProps = {}

  componentDidMount() {
    this.getCityList()
    this.getOpenWeatherData()     
  }

  getCityList() {
    axios
      .get('https://raw.githubusercontent.com/radek-polcode/react-weather-app/master/src/containers/_city.list.min.json')
      .then(response => {
        this.setState({
          cityList: response.data
        })
      })
    }

  getOpenWeatherData = () => {
    let cityId = this.state.cityId
    let currentDay = new Date(this.state.currentDateTime).getDay()
    let dayName = days[currentDay]

    axios
      .get(forecast5link + cityId + "&APPID=" + apiKey + units)
      .then(response => {
        let apiWeatherData = response.data
        let overallCityInfo = WeatherDataParser.getCityOverallInfo(apiWeatherData)
        let fiveDaysForecast = WeatherDataParser.getFiveDaysForecast(
                                                  apiWeatherData.list
                                                )
        let currentDateTimeWeather = fiveDaysForecast[dayName]
        this.setState(
          { 
            apiWeatherData: apiWeatherData,
            overallCityInfo: overallCityInfo,
            currentDateTimeWeather: currentDateTimeWeather,
            fiveDaysForecast: fiveDaysForecast,
            currentDay: days[currentDay]
          }
        )
      })
      .catch(error => console.log(error));
  }

  setCurrentDay = (selectedDay) => {
    this.setState({
      currentDay: selectedDay,
      currentDateTimeWeather: this.state.fiveDaysForecast[selectedDay]
    })
  }

  setCityId = (selectedCityId) => {
    this.setState({
      cityId: selectedCityId
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.cityId !== prevState.cityId) {
      this.getOpenWeatherData();
    }
  }

  render() {
    const cityList = this.state.cityList
    let currentDay = this.state.currentDay
    let fiveDaysForecast = this.state.fiveDaysForecast
    let overallCityInfo = this.state.overallCityInfo
    let currentDateTimeWeather = this.state.currentDateTimeWeather

    return (
      <div className="App">
        <Header />
        <Container>
          <div className="weather-block">
            <DailyWeatherBlock 
              cityList={cityList}
              currentDay={currentDay}
              currentDateTimeWeather={currentDateTimeWeather}
              overallCityInfo={overallCityInfo}
              selectedDayForecast={fiveDaysForecast[currentDay]}
              setCityId={this.setCityId}
            />
            <WeeklyWeatherList 
              currentDay={currentDay}
              setCurrentDay={this.setCurrentDay}
              fiveDaysForecast={this.state.fiveDaysForecast}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
