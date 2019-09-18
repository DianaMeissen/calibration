import React from 'react';
import './mainApp/App.css';

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
        this.changeCirclePosition()
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

  changeCirclePosition() {
    let matrix = [...this.state.circlePointsMatrix];

    for (let i = 0; i < this.state.randomizer.length; i++) {
      let coordinates = this.getRandomElementFromArray();
      let values = matrix[coordinates[0]][coordinates[1]].split(',');
      this.setState({ top: values[1], left: values[0] }, () => console.log(this.state));
    }
  }

  getRandomElementFromArray = () => {
    let array = [...this.state.randomizer];
    let index = Math.floor(Math.random() * array.length);
    let element = array[index];
    array.splice(index, 1);
    this.setState({ randomizer: array })
    return element.split(',');
  }

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
              top={this.state.top}
              left={this.state.left} />
          </div>)
        }
      </div>
    );
  }
}

export default App;
