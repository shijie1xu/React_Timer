import React, { useState, useEffect } from 'react';
import "./Timer.css";

const Timer = () => {
    const [inputSeconds, setInputSeconds] = useState("");
    const [timeLeft, setTimeLeft] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [initialTime, setInitialTime] = useState(null);
    const [haveRun, setHaveRun] = useState(false);

    useEffect(() => {
        if (isRunning && timeLeft !== null && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(prev => (prev !== null ? prev - 10 : null));
            }, 10);
            return () => clearInterval(interval);
        }
        if (timeLeft !== null && timeLeft <= 0) {
            setIsRunning(false);
        }
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        const seconds = parseFloat(inputSeconds);
        if (!isNaN(seconds) && seconds > 0) {
            const totalMilliseconds = seconds * 1000;
            setTimeLeft(totalMilliseconds);
            setInitialTime(totalMilliseconds);
            setIsRunning(true);
            setHaveRun(true);
        }
    };
    const handleReset = () => {
        setInputSeconds("");
        setTimeLeft(null);
        setIsRunning(false);
        setInitialTime(null);
        setHaveRun(false);
    }

    const getFormattedTime = () => {
        if (timeLeft !== null && timeLeft > 0) {
            const seconds = Math.floor(timeLeft / 1000);
            const milliseconds = timeLeft % 1000;
            return `${seconds}.${milliseconds}s`;
        }
        return "Time's up";
    };

    return (
        <div className="timer-container">
            <input 
                type="number" 
                value={inputSeconds} 
                onChange={(e) => setInputSeconds(e.target.value)} 
                placeholder="Enter seconds" 
                disabled={isRunning}
            />
            <div className="button-group-container">
                <button onClick={startTimer} disabled={isRunning}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div 
                className={`time-display ${timeLeft !== null && timeLeft < 5000 ? 'low-time' : ''}`}>
                {haveRun && getFormattedTime()}
            </div>
            {haveRun && (
                <div className="progress-bar-container">
                    <div className="progress-bar" 
                        style={{ width: timeLeft !== null && initialTime !== null ? (timeLeft / initialTime) * 300 : 300 }}>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timer;
