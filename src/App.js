import React from 'react';
import './App.css';

import AnimationOfCalibration from './animationOfCalibration/AnimationOfCalibration'
import HelloBlock from './helloBlock/HelloBlock'

class App extends React.Component {

  state = {
    showAnimation: false,
    showStartButton: true,
    showHelloBlock: false,
    mainBgStyle: "main-scene",
    circlePointsMatrix: [],
    top: null,
    left: null,
    circlePointsMatrixLength: [],
    randomizer: [],
  }

  showHelloBlock = () => {
    this.setState({
      showHelloBlock: true,
      showStartButton: false,
      mainBgStyle: "main-scene--animated",
    })
    this.showAnimation();
  }

  showAnimation() {
    setTimeout(
      () => {
        this.setState({
          showHelloBlock: false,
          showAnimation: true,
        })
      }, 3000);
    this.changeCirclePosition();
  }

  createMatrix = (x, y) => {
    let circlePointsMatrix = [];
    let randomizer = [];
    let circlePointsMatrixLength = [x, y];
    const xMinusOne = x - 1;
    const yMinusOne = y - 1;
    const firstPoint = 10;
    let yConst = 0;
    let pointY = firstPoint;

    for (let i = 0; i < y; i++) {
      let xArray = [];
      let xConst = 0;
      pointY += yConst;
      let pointX = firstPoint;

      for (let j = 0; j < x; j++) {
        randomizer.push(`${i},${j}`);
        pointX += xConst;
        xArray.push(`${Math.round(pointY)},${Math.round(pointX)}`);
        xConst = 80 / xMinusOne;
      }

      yConst = 80 / yMinusOne;
      circlePointsMatrix.push(xArray);
    }
    this.setState({
      circlePointsMatrix,
      circlePointsMatrixLength,
      randomizer,
    }, () => console.log(this.state))
  }

  changeTopAndLeft(top, left) {
    this.setState({ top, left })
  }

  changeCirclePosition() {
    let matrix = [...this.state.circlePointsMatrix];
    for (let i = 0; i < this.state.randomizer.length; i++) {
      let coordinates = this.getRandomElementFromArray().split(',');
      console.log(coordinates);
      console.log(this.state.randomizer);
      let values = matrix[coordinates[0]][coordinates[1]].split(',');
      this.setState({ top: values[1], left: values[0] });
    }
  }

  setRandomizer = randomizer => {
    this.setState({ randomizer });
  }

  getRandomElementFromArray() {
    let array = [...this.state.randomizer];
    let index = Math.floor(Math.random() * array.length);
    let element = array[index];
    array.splice(index, 1);
    this.setState({ randomizer: array });
    return element;
  }

  componentDidMount() {
    this.createMatrix(5, 3);
  }

  render() {
    return (
      <div className="animation-container">
        {this.state.showStartButton &&
          <button
            className="start-button"
            onClick={this.showHelloBlock}>
            Start
          </button>
        }
        <div className={this.state.mainBgStyle}>
          {this.state.showHelloBlock && <HelloBlock />}
          {this.state.showAnimation &&
            <AnimationOfCalibration
              top={this.state.top}
              left={this.state.left} />
          }
        </div>
      </div>
    );
  }
}

export default App;
