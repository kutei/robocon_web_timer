import React, { useState, useRef, useEffect } from 'react';

interface CountDownTimerHandle {
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: (newSeconds: number) => void;
}

interface CountDownTimerProps {
    timerRef: React.RefObject<CountDownTimerHandle>;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ timerRef }) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
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

    const stopTimer = () => {
        if (isActive) {
            clearInterval(intervalRef.current!);
            setIsActive(false);
        }
    };

    const resetTimer = (newSeconds: number) => {
        clearInterval(intervalRef.current!);
        setIsActive(false);
        setSeconds(newSeconds);
    };

    useEffect(() => {
        if (timerRef && timerRef.current) {
            timerRef.current.startTimer = startTimer;
            timerRef.current.stopTimer = stopTimer;
            timerRef.current.resetTimer = resetTimer;
        }
    }, [timerRef]);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <div>{formatTime(seconds)}</div>
        </div>
    );
};

export default CountDownTimer;
