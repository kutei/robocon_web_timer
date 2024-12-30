import React, { useState, useRef } from 'react';

type CountDownTimerProps = {
    timerTime: number;
};

const CountDownTimer = ({ timerTime }: CountDownTimerProps) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleStart = () => {
        if (!isActive) {
            setIsActive(true);
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        clearInterval(intervalRef.current!);
                        setIsActive(false);
                        return 0;
                    }
                });
            }, 1000);
        }
    };

    const handleStop = () => {
        if (isActive) {
            clearInterval(intervalRef.current!);
            setIsActive(false);
        }
    };

    const handleReset = () => {
        clearInterval(intervalRef.current!);
        setIsActive(false);
        setSeconds(timerTime);
    };

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="countdown-timer">
            <div>{formatTime(seconds)}</div>
            <div className="buttons">
                <button onClick={handleStart}>START</button>
                <button onClick={handleStop}>STOP</button>
                <button onClick={handleReset}>RESET</button>
            </div>
        </div>
    );
};

export default CountDownTimer;
