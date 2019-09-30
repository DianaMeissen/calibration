import React from 'react';
import './animationOfCalibration.css';

const AnimationOfCalibration = (props) => {

    // componentDidMount() {
    //     new Promise((res) => {
    //         setTimeout(() => { this.props.startCalibration(true) }, 1000);
    //     })
    // }

    // componentWillUnmount() {
    //     this.props.startCalibration(false);
    // }

    return (
        <div className="circles--animated centered" style={{ top: `${props.top}%`, left: `${props.left}%` }}>
            <div className="circle big centered"></div>
            <div className="circle small centered"></div>
        </div>
    );
}

export default AnimationOfCalibration;