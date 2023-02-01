import { useEffect, useState } from 'react';
import './SwipperCounter.scss';

const SwipperCounter = ({ style, swipperRef, time = {days: 1, hours: 1, minutes: 1, seconds: 1} }) => {
    const [countdown, setCountdown] = useState(time);

    const handleCountdown = (countdown) => {
        let {days, hours, minutes, seconds} = countdown;

        if (seconds > 0) {
            return {...countdown, seconds: countdown.seconds - 1};
        } else {
            if (minutes > 0) {
                return {...countdown, seconds: 59, minutes: countdown.minutes - 1};
            } else {
                if (hours > 0) {
                    return {...countdown, hours: countdown.hours - 1, minutes: 59, seconds: 59};
                } else {
                    if (days > 0)
                        return {...countdown, hours: 23, minutes: 59, seconds: 59, days: countdown.days - 1};
                }
            }
        }
        

    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCountdown(countdown => handleCountdown(countdown));
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div ref={swipperRef} style={style} id="header-counter">
            <span id="header-counter-days">
                {countdown.days}<sub>d</sub>
            </span>
            <span id="header-counter-hours">
                {countdown.hours}<sub>h</sub>
            </span>
            <span id="header-counter-minutes">
                {countdown.minutes}<sub>m</sub>
            </span>
            <span>
                {countdown.seconds}<sub>s</sub>
            </span>
        </div>
    );
}

export default SwipperCounter;