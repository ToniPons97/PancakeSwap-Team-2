import './SwipperCounter.scss';

const SwipperCounter = ({ style, countdown }) => {



    return (
        <div style={style} id="header-counter">
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