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
    const [ currentBulletIndex, setCurrentBulletIndex ] = useState(0);
    const bulletsContainerRef = useRef(null);

    const customImgStyles = [
        {top: '-36px', right: '0px', }, 
        {width: '1105px', height: '222px', top: '-24px', right: '-6px'},
        {width: '392px', height: '236px', top: '-41px', right: '0px'}

    ]

    const sliderElements = [
        {
            top: <img className="header-head-el" src={aptosXps} height="20px" width="220px" />,
            middle: <h1>Hello Aptos Project Teams!</h1>,
            bottom: <span>
                        <b>👋 Get in Touch </b>
                        <img src={headerOpenInNew} alt="open in new tab." />
                    </span>,
            image: aptos
        }, 
        {
            top: <h1 className="header-head-el" id="header-win-lottery">Win 62,729 in Lottery</h1>,
            middle: <SwipperCounter time={{days: 2, hours: 15, minutes: 20, seconds: 14}} />,
            bottom: <span>
                        <b>Play Now</b>
                        <img src={headerBtnRightArrow} alt="Right arrow." />
                    </span>,
            image: lottery
        }, 
        {
            top: <h1 className="header-head-el">Perpetual Futures</h1>,
            middle: <h1>UP TO 100x LEVERAGE</h1>,
            bottom: <span>
                        <b>Trade Now</b>
                        <img src={headerBtnRightArrow} alt="Right arrow." />
                    </span>,
            image: perpetual
        }
    ]

    const handleBulletSelection = (event) => {
        const bulletsArr = Array.from(bulletsContainerRef.current.children);

        const clickedBullet = event.target
        const clickedBulletIndex = bulletsArr.indexOf(clickedBullet);

        if (clickedBulletIndex !== currentBulletIndex) {
            bulletsArr[currentBulletIndex].removeAttribute('id');
            setCurrentBulletIndex(prevBullet => clickedBulletIndex);
            clickedBullet.setAttribute('id', 'header-bullet-active');
        }
    }

    
    
    return (
        <div  className="ibrahim-rectangle">
            
               {sliderElements[currentBulletIndex].top}


            <div id="headTag" className="ibrahim-head-margin">
               
                {sliderElements[currentBulletIndex].middle}
                
            </div>
            <div className="ibrahim-head-margin">
                <button className="ibrahim-button" >

                    {sliderElements[currentBulletIndex].bottom}

                </button>
            </div>

            <img 
                className="header-box-imgs" 
                id='header-aptos-img'
                style={customImgStyles[currentBulletIndex]}
                src={sliderElements[currentBulletIndex].image}
                alt=''       
            />
            
            
            <div ref={bulletsContainerRef} id="header-swipper-container">
                <div onClick={handleBulletSelection} id="header-bullet-active" className="header-swipper"></div>
                <div onClick={handleBulletSelection} className="header-swipper"></div>
                <div onClick={handleBulletSelection} className="header-swipper"></div>
            </div>
        </div>
    );
}

export default HeaderSwipper;