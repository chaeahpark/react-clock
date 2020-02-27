import React from 'react';
import Greeting from './Greeting';
import afternoonImg from '../images/afternoon.jpg';
import sunriseImg from '../images/sunrise.png';
import sunsetImg from '../images/sunset.jpg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chaeah',
      date: '',
      time: '',
      partOfDay: ''
    };
  }

  componentDidMount() {
    this.updateDate();
    setInterval(() => this.updateClock(), 1000);
  }

  // get the date
  updateDate() {
    const today = new Date();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const date = [
      today.getDate(),
      months[today.getMonth()],
      today.getFullYear()
    ].join(' ');

    this.setState({ date: date });
  }

  // get the current time
  updateClock() {
    const today = new Date();
    const h = today.getHours();
    const m = ('0' + today.getMinutes()).slice(-2);
    const s = ('0' + today.getSeconds()).slice(-2);
    const time = h + ':' + m + ':' + s;
    this.setState({ time: time });
    this.chkPartOfDay(h);
  }

  // check a part of the day with the current time
  chkPartOfDay(hour) {
    let partOfDay;
    if (hour >= 5 && hour < 12) {
      partOfDay = 'Morning';
    } else if (hour >= 12 && hour < 18) {
      partOfDay = 'Afternoon';
    } else if (hour >= 18 && hour < 22) {
      partOfDay = 'Evening';
    } else if (hour < 5 || hour >= 22) {
      partOfDay = 'Night';
    }
    return this.setState({ partOfDay: partOfDay });
  }

  // set background image based on time.
  setImage() {
    const partOfDay = this.state.partOfDay;
    let ImgSrc;
    if (partOfDay === 'Morning') {
      ImgSrc = sunriseImg;
    } else if (partOfDay === 'Afternoon') {
      ImgSrc = afternoonImg;
    } else if (partOfDay === 'Evening' || partOfDay === 'Night') {
      ImgSrc = sunsetImg;
    }
    return ImgSrc;
  }

  // render out
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url(${this.setImage()})`
        }}
      >
        <div>
          {this.state.date} {this.state.time}
        </div>
        <Greeting name={this.state.name} partOfDay={this.state.partOfDay} />
      </div>
    );
  }
}

export default App;
