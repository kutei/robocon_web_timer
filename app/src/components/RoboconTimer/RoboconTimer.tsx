import React, { useState, useRef } from 'react';
import './RoboconTimer.css';
import CountDownTimer from './CountDownTimer';

const RoboconTimer: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef<{ start: () => void; pause: () => void; reset: () => void }>(null);

    const handleStart = () => {
        setIsActive(true);
        timerRef.current?.start();
    };

    const handlePause = () => {
        setIsActive(false);
        timerRef.current?.pause();
    };

    const handleReset = () => {
        setIsActive(false);
        timerRef.current?.reset();
    };

    return (
        <div className="robocon-timer">
            <CountDownTimer ref={timerRef} />
            <div className="buttons">
                <button onClick={handleStart}>START</button>
                <button onClick={handlePause}>PAUSE</button>
                <button onClick={handleReset}>RESET</button>
            </div>
        </div>
    );
};

export default RoboconTimer;
