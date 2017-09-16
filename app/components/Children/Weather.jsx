import React from 'react';
import moment from 'moment';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.determineWeatherIcon = this.determineWeatherIcon.bind(this);
  }
  determineWeatherIcon(weatherProp) {
    const sunrise = moment(this.props.sunrise,'hh:mm:a');
    const sunset = moment(this.props.sunset,'hh:mm:a');
    const currentTime = moment(this.props.currentTime,'hh:mm:a');
    let isNight;
    if ((currentTime).isAfter(sunset) || (currentTime).isBefore(sunrise)) {
      isNight = true;
    } else {
      isNight = false;
    }

    if (weatherProp === 'chanceflurries') {
      if (isNight === false) return 'wi wi-day-snow';
      return 'wi wi-night-snow';
    } else if (weatherProp === 'chancerain') {
      if (isNight === false) return 'wi wi-sprinkle';
      return 'wi wi-night-sprinkle';
    } else if (weatherProp === 'chancesleet') {
      if (isNight === false) return 'wi wi-day-sleet';
      return 'wi wi-night-sleet';
    } else if (weatherProp === 'chancesnow') {
      if (isNight === false) return 'wi wi-day-snow';
      return 'wi wi-night-snow';
    } else if (weatherProp === 'chancestorms' || weatherProp === 'chancetstorms') {
      if (isNight === false) return 'wi wi-day-sprinkle';
      return 'wi wi-night-sprinkle';
    } else if (weatherProp === 'clear') {
      if (isNight === false) return 'wi wi-day-sunny';
      return 'wi wi-night-clear';
    } else if (weatherProp === 'cloudy') {
      return 'wi wi-cloud';
    } else if (weatherProp === 'flurries') {
      if (isNight === false) return 'wi wi-day-snow';
      return 'wi wi-night-snow';
    } else if (weatherProp === 'fog') {
      if (isNight === false) return 'wi wi-day-fog';
      return 'wi wi-night-fog';
    } else if (weatherProp === 'hazy') {
      return 'wi wi-day-haze';
    } else if (weatherProp === 'mostlycloudy') {
      if (isNight === false) return 'wi wi-cloudy';
      return 'wi wi-night-alt-cloudy';
    } else if (weatherProp === 'mostlysunny') {
      if (isNight === false) return 'wi wi-day-sunny-overcast';
      return 'wi wi-night-alt-cloudy';
    } else if (weatherProp === 'partlycloudy') {
      if (isNight === false) return 'wi wi-day-cloudy';
      return 'wi wi-night-alt-cloudy';
    } else if (weatherProp === 'partlysunny') {
      if (isNight === false) return 'wi wi-day-sunny-overcast';
      return 'wi wi-night-alt-cloudy';
    } else if (weatherProp === 'sleet') {
      if (isNight === false) return 'wi wi-day-sleet';
      return 'wi wi-night-sleet';
    } else if (weatherProp === 'rain') {
      if (isNight === false) return 'wi wi-rain';
      return 'wi wi-rain';
    } else if (weatherProp === 'snow') {
      if (isNight === false) return 'wi wi-snow';
      return 'wi wi-snow';
    } else if (weatherProp === 'sunny') {
      if (isNight === false) return 'wi wi-day-sunny';
      return 'wi wi-night-clear';
    } else if (weatherProp === 'tstorms') {
      if (isNight === false) return 'wi wi-storm-showers';
      return 'wi wi-storm-showers';
    } else if (weatherProp === 'unknown') {
      if (isNight === false) return 'wi wi-day-cloudy-high';
      return 'wi wi-stars';
    } else if (weatherProp === 'cloudy') {
      if (isNight === false) return 'wi wi-day-cloudy';
      return 'wi wi-night-alt-cloudy';
    }
    return 'wi wi-na';
  }
  render() {
    return (
      <div className="col-xs-12 allWeather">
        <div className="col-xs-2 weatherProp">
          <i className={this.determineWeatherIcon(this.props.todayPic)} />
          <div className="weatherDescription">
            <p>{`${this.props.today} & ${this.props.todayTemp}`}</p>
            <p>{this.props.todayHour}</p>
          </div>
        </div>
        <div className="col-xs-2 weatherOne">
          <i className={this.determineWeatherIcon(this.props.onePic)} />
          <div className="weatherDescription">
            <p>{`${this.props.one} & ${this.props.oneTemp}`}</p>
            <p>{this.props.oneHour}</p>
          </div>
        </div>
        <div className="col-xs-2 weatherTwo">
          <i className={this.determineWeatherIcon(this.props.twoPic)} />
          <div className="weatherDescription">
            <p>{`${this.props.two} & ${this.props.twoTemp}`}</p>
            <p>{this.props.twoHour}</p>
          </div>
        </div>
        <div className="col-xs-2 weatherThree">
          <i className={this.determineWeatherIcon(this.props.threePic)} />
          <div className="weatherDescription">
            <p>{`${this.props.three} & ${this.props.threeTemp}`}</p>
            <p>{this.props.threeHour}</p>
          </div>
        </div>
        <div className="col-xs-2 weatherFour">
          <i className={this.determineWeatherIcon(this.props.fourPic)} />
          <div className="weatherDescription">
            <p>{`${this.props.four} & ${this.props.fourTemp}`}</p>
            <p>{this.props.fourHour}</p>
          </div>
        </div>
        <div className="col-xs-2 weatherFive">
          <i className={this.determineWeatherIcon(this.props.fivePic)} />
          <div className="weatherDescription">
            <p>{`${this.props.five} & ${this.props.fiveTemp}`}</p>
            <p>{this.props.fiveHour}</p>
          </div>
        </div>
      </div>
    );
  }
}
