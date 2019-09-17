import React from 'react';
import './helloBlock.css';

const HelloBlock = () => {
    return (
        <div className="centered">
            <div className="hello-block centered">
                <div className="circles--animated centered">
                    <div className="circle big centered"></div>
                    <div className="circle small centered"></div>
                </div>
                <span className="hello-text">Look directly at calibration points</span>
            </div>
        </div>
    );
}

export default HelloBlock;