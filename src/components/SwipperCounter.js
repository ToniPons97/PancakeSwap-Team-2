import { useCountdownStore } from './state/countdownState';
import './SwipperCounter.scss';

const SwipperCounter = ({ style }) => {
    const { days, hours, minutes, seconds } = useCountdownStore(state => state.countdown);


    return (
        <div style={style} id="header-counter">
            <span id="header-counter-days">
                {days}<sub>d</sub>
            </span>
            <span id="header-counter-hours">
                {hours}<sub>h</sub>
            </span>
            <span id="header-counter-minutes">
                {minutes}<sub>m</sub>
            </span>
            <span>
                {seconds}<sub>s</sub>
            </span>
            
        </div> 
    );
}

export default SwipperCounter;