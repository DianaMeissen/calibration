import React from 'react';
import './animationOfCalibration.css';

const AnimationOfCalibration = (props) => {
    return (
        <div className="circles--animated centered" style={{ top: `${props.top}%`, left: `${props.left}%` }}>
            <div className="circle big centered"></div>
            <div className="circle small centered"></div>
        </div>
    );
}

export default AnimationOfCalibration;