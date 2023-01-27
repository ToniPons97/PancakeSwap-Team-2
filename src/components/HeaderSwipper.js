import './HeaderSwipper.scss';
import aptosXps from '../assets/images/header-images/AptosXPancakeSwap.webp'
import headerOpenInNew from '../assets/icons/header-open-in-new.svg';
import headerBtnRightArrow from '../assets/icons/header-btn-right-arrow.svg';
import aptos from '../assets/images/header-images/Aptos.webp';
import lottery from '../assets/images/header-images/lottery.webp';
import perpetual from '../assets/images/header-images/perpetual.webp';

const HeaderSwipper = () => {
    return (
        <div className="ibrahim-rectangle">
            <img className="header-head-el" src={aptosXps} height="20px" width="220px" />
            <h1 className="header-head-el" id="header-win-lottery">Win 62,729 in Lottery</h1>
            <h1 className="header-head-el">Perpetual Futures</h1>
            <div id="headTag" className="ibrahim-head-margin">
                <h1>Hello Aptos Project Teams!</h1>
                <div id="header-counter">
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
                <h1>UP TO 100x LEVERAGE</h1>
            </div>
            <div className="ibrahim-head-margin">
                <button className="ibrahim-button" >
                    <span>
                        <b>👋 Get in Touch </b>
                        <img src={headerOpenInNew} alt="open in new tab." />
                    </span>
                    <span>
                        <b>Play Now</b>
                        <img src={headerBtnRightArrow} alt="Right arrow." />
                    </span>
                    <span>
                        <b>Trade Now</b>
                        <img src={headerBtnRightArrow} alt="Right arrow." />
                    </span>
                </button>
            </div>
            <img className="header-box-imgs" id="header-aptos-img" src={aptos} alt="Aptos image." />
            <img className="header-box-imgs" id="header-lottery-img" src={lottery} alt="Lottery image." />
            <img className="header-box-imgs" id="header-perpetual-img" src={perpetual} alt="Perpetual image." />
            <div id="header-swipper-container">
                <div id="header-bullet-active" className="header-swipper"></div>
                <div className="header-swipper"></div>
                <div className="header-swipper"></div>
            </div>
        </div>
    );
}

export default HeaderSwipper;