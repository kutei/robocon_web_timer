import React from 'react';
import './RoboconTimer.css';
import CountDownTimer from './CountDownTimer';

const RoboconTimer = () => {
    return (
        <div className="robocon-timer">
            <CountDownTimer timerTime={120}/>
        </div>
    );
};

export default RoboconTimer;
