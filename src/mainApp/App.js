import React from 'react';
import './App.css';

import AnimationOfCalibration from '../animationOfCalibration/AnimationOfCalibration';
import HelloBlock from '../helloBlock/HelloBlock';
import { createMatrix } from '../helper/Helper';
import { START_TOP, START_LEFT } from '../constants/MainConstants';

class App extends React.Component {

  state = {
    showStartButton: true,
    showHelloBlock: false,
    circlePointsMatrix: [],
    randomizer: [],
    isCalibrationStart: false,
  }

  showHelloBlockAndStartAnimation = () => {
    this.setState({
      showHelloBlock: true,
      showStartButton: false,
      top: START_TOP,
      left: START_LEFT,
    });
    new Promise((res) => {
      setTimeout(() => {
        this.setState({ showHelloBlock: false });
        this.interval = setInterval(() => { this.changeCirclePosition() }, 3000);
      }, 3000)
    })
  }

  createMatrix = (x, y) => {
    let matrixObject = createMatrix(x, y);

    this.setState({
      circlePointsMatrix: matrixObject.circlePointsMatrix,
      randomizer: matrixObject.randomizer,
    })
  }

  // method for getting dots X coordinates
  getXPosition() {
    let x = Object.assign({}, this.state.left);
    return x / 100;
  }

  // method for getting dots Y coordinates
  getYPosition() {
    let y = Object.assign({}, this.state.top);
    return y / 100;
  }

  // returns true when calibration is started
  isCalibrationStart() {
    return Object.assign({}, this.state.isCalibrationStart);
  }

  changeCirclePosition() {
    let matrix = [...this.state.circlePointsMatrix];
    new Promise((res) => { this.changeAnimationFlag(false) })

    if (this.state.randomizer.length) {
      let coordinates = this.getRandomElementFromArray();
      let values = matrix[coordinates[0]][coordinates[1]].split(',');
      this.setState({ top: values[1], left: values[0] });
      new Promise((res) => {
        setTimeout(() => { this.changeAnimationFlag(true) }, 1000);
      })
    }
  }

  changeAnimationFlag = flag => {
    this.setState({ isCalibrationStart: flag });
  }

  getRandomElementFromArray = () => {
    let array = [...this.state.randomizer];
    let index = Math.floor(Math.random() * array.length);
    let element = array[index];
    array.splice(index, 1);
    this.setState({ randomizer: array })
    return element.split(',');
  }

  //Delete this method and call it from your service with passing matrix parameters
  componentDidMount() {
    this.createMatrix(5, 3);
  }

  render() {
    return (
      <div className="animation-container">
        {this.state.showStartButton ?
          (<button
            className="start-button"
            onClick={this.showHelloBlockAndStartAnimation}>
            Start
          </button>)
          :
          (<div className="main-scene">
            {this.state.showHelloBlock && <HelloBlock />}
            <AnimationOfCalibration
              startCalibration={this.changeAnimationFlag}
              top={this.state.top}
              left={this.state.left} />
          </div>)
        }
      </div>
    );
  }
}

export default App;
