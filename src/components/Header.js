import './Header.scss';
import aptosXps from '../assets/images/header-images/AptosXPancakeSwap.webp'
import headerOpenInNew from '../assets/icons/header-open-in-new.svg';
import headerBtnRightArrow from '../assets/icons/header-btn-right-arrow.svg';
import aptos from '../assets/images/header-images/Aptos.webp';
import lottery from '../assets/images/header-images/lottery.webp';
import perpetual from '../assets/images/header-images/perpetual.webp';
import starL from '../assets/images/header-images/star-l@2x.webp';
import starR from '../assets/images/header-images/star-r@2x.webp'
import starTopR from '../assets/images/header-images/star-top-r@2x.webp'
import middleBorder from '../assets/icons/header-middle-border.svg';
import psLogo from '../assets/icons/ps-logo-icon.svg';
import spaceman from '../assets/images/header-images/spaceman.png';
import headerUser from '../assets/icons/header-users.svg';
import headerTrades from '../assets/icons/header-trades.svg';
import headerStaked from '../assets/icons/header-staked.svg';

const Header = () => {
    return (
        <div className="ibrahim-full-background">
            <div className="headMiddleBackgroundColor">
                <div className="ibrahim-head">
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
                </div>
                <div className="ibrahim-middle">
                    <div className="ibrahim-middle-left">
                        <h1 className="header-middle-tag" id="middleH1Tag">The moon is made of pancakes.</h1>
                        <h6 className="ibrahim-margin header-middle-tag" id="middleH6Tag">Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</h6>
                        <div className="ibrahim-margin">
                            <button className="header-middle-button" id="buttonRightMargin"><b>Connect Wallet</b></button>
                            <button className="header-middle-button" id="buttonSecondMiddle"><b>Trade Now</b></button>
                        </div>
                    </div>
                    <div className="ibrahim-middle-right">
                        <div id="header-spaceman-container">
                            <img id="header-star-l" className="header-star" src={starL} alt="Blinking star left." />
                            <img id="header-star-r" className="header-star" src={starR} alt="Blinking star right." />
                            <img id="header-star-top" className="header-star" src={starTopR} alt="Blinking star top." />
                            <img id="header-spaceman" src={spaceman} alt="spaceman." />
                        </div>
                    </div>
                </div>
                <div id="header-curved-container">
                    <img id="header-middle-border" src={middleBorder} alt="Curved border." />
                </div>
            </div>
            <div className="ibrahim-foot">
                <div className="alignmentVerHor">
                    <img id="ps-logo-icon" src={psLogo} alt="" />
                </div>

                <div className="alignmentVerHor millionBillion">Used by millions.</div>
                <div className="alignmentVerHor millionBillion">Trusted with billions.</div>
                <div className="footTexts">
                    <h3 className="alignmentVerHor">PancakeSwap has the most users of any decentralized platform, ever.</h3>
                    <h3 className="alignmentVerHor">And those users are now entrusting the platform with over $3.5 billion in funds.</h3></div>
                <div id="joinText" className="alignmentVerHor">Will you join them?</div>
                <div className="header-boxes-flex">
                    <div className="square">
                        <div className="icon">
                            <img src={headerUser} />
                        </div>
                        <div className="boxBottoms">
                            <div className="number">2 million</div>
                            <div id="usersCategory" className="category">users</div>
                            <div className="time">in the last 30 days</div>
                        </div>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <img src={headerTrades} />
                        </div>
                        <div className="boxBottoms">
                            <div className="number">55 million</div>
                            <div id="tradesCategory" className="category">trades</div>
                            <div className="time">made in the last 30 days</div>
                        </div>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <img src={headerStaked} />
                        </div>
                        <div className="boxBottoms">
                            <div className="number">$3.5 billion</div>
                            <div id="stakedCategory" className="category">staked</div>
                            <div className="time">Total Value Locked</div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d7caec" fillOpacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path>
            </svg>
        </div>
    );
}

export default Header;