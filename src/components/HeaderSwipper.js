import './HeaderSwipper.scss';
import aptosXps from '../assets/images/header-images/AptosXPancakeSwap.webp'
import headerOpenInNew from '../assets/icons/header-open-in-new.svg';
import headerBtnRightArrow from '../assets/icons/header-btn-right-arrow.svg';
import aptos from '../assets/images/header-images/Aptos.webp';
import lottery from '../assets/images/header-images/lottery.webp';
import perpetual from '../assets/images/header-images/perpetual.webp';
import SwipperCounter from './SwipperCounter';
import { useEffect, useRef, useState } from 'react';

const HeaderSwipper = () => {
    const [counter, setCounter] = useState(0);
    
    // Top Swipper Elements
    const topImgRef = useRef(null);
    const topWinRef = useRef(null);
    const topPerpetualRef =  useRef(null);

    const topElementsRefs = [topImgRef, topWinRef, topPerpetualRef];

    // Middle elements
    const middleHelloRef = useRef(null);
    const middleCounterRef = useRef(null);
    const middleLeverageRef = useRef(null);

    const middleElementsRefs = [middleHelloRef, middleCounterRef, middleLeverageRef];

    // Button contents
    const btnGetRef = useRef(null);
    const btnPlayRef = useRef(null);
    const btnTradeRef = useRef(null);

    const buttonContentsRefs = [btnGetRef, btnPlayRef, btnTradeRef];

    // Swipper Images
    const aptosImgRef = useRef(null);
    const lotteryImgRef = useRef(null);
    const perpetualImgRef = useRef(null);

    const imagesRefs = [aptosImgRef, lotteryImgRef, perpetualImgRef];

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(counter);


            topElementsRefs[counter].current.style['display'] = 'flex';
            buttonContentsRefs[counter].current.style['display'] = 'flex';
            imagesRefs[counter].current.style['display'] = 'flex';
            middleElementsRefs[counter].current.style['display'] = 'flex';
            
            
            if (counter !== 0) {
                topElementsRefs[(counter - 1) % topElementsRefs.length].current.style['display'] = 'none';
                buttonContentsRefs[(counter - 1) % buttonContentsRefs.length].current.style['display'] = 'none';
                imagesRefs[(counter - 1) % imagesRefs.length].current.style['display'] = 'none';
                middleElementsRefs[(counter - 1) % middleElementsRefs.length].current.style['display'] = 'none';
            }
            else {
                topElementsRefs[topElementsRefs.length - 1].current.style['display'] = 'none';
                buttonContentsRefs[buttonContentsRefs.length - 1].current.style['display'] = 'none';
                imagesRefs[imagesRefs.length - 1].current.style['display'] = 'none';
                middleElementsRefs[middleElementsRefs.length - 1].current.style['display'] = 'none';
            }

            setCounter(value => (value + 1) % topElementsRefs.length);
            
        }, 2000);

        return () => {
            clearInterval(intervalId);
        }
    }, [counter]);
    



    return (
        <div className="ibrahim-rectangle">
            <img ref={topImgRef} style={{display: 'flex'}} className="header-head-el" src={aptosXps} height="20px" width="220px" />
            <h1 ref={topWinRef} style={{display: 'none'}} className="header-head-el" id="header-win-lottery">Win 62,729 in Lottery</h1>    
            <h1 ref={topPerpetualRef} style={{display: 'none'}} className="header-head-el">Perpetual Futures</h1>


            <div id="headTag" className="ibrahim-head-margin">
                <h1 ref={middleHelloRef} style={{display: 'flex'}}>Hello Aptos Project Teams!</h1>

                <SwipperCounter swipperRef={middleCounterRef} style={{display: 'none'}} />



                <h1 ref={middleLeverageRef} style={{display: 'none'}}>UP TO 100x LEVERAGE</h1>
            </div>
            <div className="ibrahim-head-margin">
                <button className="ibrahim-button" >
                    <span style={{display: 'flex'}} ref={btnGetRef}>
                        <b>👋 Get in Touch </b>
                        <img src={headerOpenInNew} alt="open in new tab." />
                    </span>
                    <span style={{display: 'none'}} ref={btnPlayRef}>
                        <b>Play Now</b>
                        <img src={headerBtnRightArrow} alt="Right arrow." />
                    </span>
                    <span style={{display: 'none'}} ref={btnTradeRef}>
                        <b>Trade Now</b>
                        <img src={headerBtnRightArrow} alt="Right arrow." />
                    </span>
                </button>
            </div>
            <img ref={aptosImgRef} className="header-box-imgs" id="header-aptos-img" src={aptos} alt="Aptos." />
            <img ref={lotteryImgRef} className="header-box-imgs" id="header-lottery-img" src={lottery} alt="Lottery." />
            <img ref={perpetualImgRef} className="header-box-imgs" id="header-perpetual-img" src={perpetual} alt="Perpetual." />
            <div id="header-swipper-container">
                <div id="header-bullet-active" className="header-swipper"></div>
                <div className="header-swipper"></div>
                <div className="header-swipper"></div>
            </div>
        </div>
    );
}

export default HeaderSwipper;