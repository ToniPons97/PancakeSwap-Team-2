import './SwipperCounter.scss';

const SwipperCounter = ({ style, swipperRef }) => {
    return (
        <div ref={swipperRef} style={style} id="header-counter">
            <span id="header-counter-days">
                1<sub>d</sub>
            </span>
            <span id="header-counter-hours">
                8<sub>h</sub>
            </span>
            <span id="header-counter-minutes">
                16<sub>m</sub>
            </span>
            <span>
                14<sub>s</sub>
            </span>
        </div>
    );
}

export default SwipperCounter;