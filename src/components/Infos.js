import './Infos.scss';
import ball2 from '../assets/images/lottery-balls/2@2x.webp';
import ball7 from '../assets/images/lottery-balls/7@2x.webp';
import ball4 from '../assets/images/lottery-balls/4@2x.webp';
import ball6 from '../assets/images/lottery-balls/6@2x.webp';
import ball9 from '../assets/images/lottery-balls/9@2x.webp';
import green from '../assets/images/prediction-cards/green@2x.webp';
import red from '../assets/images/prediction-cards/red@2x.webp';
import bottomLeft from '../assets/images/prediction-cards/bottom-left@2x.webp';
import topRight from '../assets/images/prediction-cards/top-right@2x.webp';
import prediction from '../assets/icons/prediction.svg';
import infos_3_RightArrow from '../assets/icons/infos-3-right-arrow.svg';
import lottery from '../assets/icons/lottery.svg';
import bottomRight from '../assets/images/cards-images/bottom-right@2x.webp';
import topRightCard from '../assets/images/cards-images/top-right@2x.webp';
import coin from '../assets/images/cards-images/coin@2x.webp';
import topLeft from '../assets/images/cards-images/top-left@2x.webp';

const Infos = () => {
    return (
        <>
            <section id="infos-1">
                <div>
                    <div id="infos-1-title-container">
                        <h2>Top 
                        <span id="category">Farms</span>
                    </h2>
                        <button id="up-down-button">
                            <svg id="up-down-arrow" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 
                                17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 
                                15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 
                                3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 
                                6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 
                                13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 
                                3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z">
                            </path>
                            </svg>
                        </button>
                    </div>

                    <div id="trade-data-container">
                        <div className="data-box">
                            <h3>MHUNT-BNB LP</h3>
                            <span id="percentage">321.269%</span>
                            <p>APR</p>
                        </div>
                        
                        <div className="data-box">
                            <h3>KRS-BUSD LP</h3>
                            <span id="percentage">220.422%</span>
                            <p>APR</p>
                        </div>

                        <div className="data-box">
                            <h3>CO-BUSD LP</h3>
                            <span id="percentage">175.543%</span>
                            <p>APR</p>
                        </div>
                        
                        <div className="data-box">
                            <h3>HOOP-BUSD LP</h3>
                            <span id="percentage">169.051%</span>
                            <p>APR</p>
                        </div>
                        
                        <div className="data-box">
                            <h3>WMX-BUSD LP</h3>
                            <span id="percentage">133.768%</span>
                            <p>APR</p>
                        </div>
                    </div>
                </div>
            </section>
        <section id="infos-2">
            <img id="lott-ball-1" className="lott-balls" src={ball2} alt="Lottery ball." />
            <img id="lott-ball-2" className="lott-balls" src={ball7} alt="Lottery ball." />
            <img id="lott-ball-3" className="lott-balls" src={ball4} alt="Lottery ball." />
            <img id="lott-ball-4" className="lott-balls" src={ball6} alt="Lottery ball." />
            <img id="lott-ball-5" className="lott-balls infos-blurry-img" src={ball9} alt="Lottery ball." />
            
            <img id="pred-card-1" className="pred-cards" src={green} alt="Prediction card." />
            <img id="pred-card-2" className="pred-cards" src={red} alt="Prediction card." />
            <img id="pred-card-3" className="pred-cards" src={bottomLeft} alt="Prediction card." />
            <img id="pred-card-4" className="pred-cards infos-blurry-img" src={topRight} alt="Prediction card." />
            
            <div>
                <div>
                    <div id="infos-2-title">
                        <h2><span id="infos-2-win">Win</span> millions in prices</h2>
                        <div id="infos-2-subtitle">
                            <p>Provably fair, on-chain games.</p>
                            <p>Win big with PancakeSwap.</p>
                        </div>
                    </div>
                <div id="infos-cards-flex">
                    <div className="price-box" id="prediction-container">
                        <img src={prediction} alt="A crystal ball icon." />
                        <h3>Prediction</h3>
                        <span className="price">$900 million</span>
                        <span className="price-description">in BNB + CAKE won so far</span>
                        <p>Predict the price trend of BNB or CAKE to win</p>
                        <button>
                            Play
                            <img src={infos_3_RightArrow} alt="right arrow" />
                        </button>
                    </div> 

                    <div className="price-box" id="lottery-container">
                        <img src={lottery} alt="A lottery ticket icon." />
                        <h3>Lottery</h3>
                        <span className="price">$119,641</span>
                        <span id="lottery-description" className="price-description">in CAKE prizes this round</span>
                        <p>Buy tickets with CAKE, win CAKE if your numbers match</p>
                        <button>
                            Buy Tickets
                            <img src={infos_3_RightArrow} alt="Right arrow." />
                        </button>
                    </div>

                </div>
                </div>
            </div>
            </section>
            <div id="cards-3" className="cards">
                <div className="cards-text">
                    <h2 className="cards-h2"> <span className="blue-text">CAKE</span> makes our world go round.</h2>
                    <p>Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>
                    <div className="cards-links">
                    <button className="trade">Buy Cake</button>
                    <a className="learn-link" href="#">Learn</a>
                    </div>
                </div>
                <div id="cards-images" className="cards-image-right cards-images-3">
                    <div className="img-1">
                        <img id="cards-img-7" src={bottomRight} alt="bottom right" />
                    </div>
                    <div className="img-2 cards-image-right img-2">
                        <img id="cards-img-8" src={topRightCard} alt="top right pancake" />
                    </div>
                    <div className="img-3">
                        <img id="cards-img-9" src={coin} alt="coin" />
                    </div>
                    <div className="img-4">
                        <img id="cards-img-10" src={topLeft} alt="top left pancake" />
                    </div>
                </div>
            </div>



            <section id="infos-3">
                <div>
                    <div>
                        <div className="infos-3-data-box">
                            <h4>Circulating Supply</h4>
                            <p>143,949,654</p>
                        </div>

                        <div className="infos-3-data-box">
                            <h4>Total supply</h4>
                            <p>337,653,324</p>
                        </div>

                        <div className="infos-3-data-box">
                            <h4>Max Supply</h4>
                            <p>750,000,000</p>
                        </div>
                        
                        <div className="infos-3-data-box">
                            <h4>Market cap</h4>
                            <p>$650 million</p>
                        </div>

                        <div className="infos-3-data-box">
                            <h4>Burned to date</h4>
                            <p>619,539,028</p>
                        </div>
                             
                        <div className="infos-3-data-box">
                            <h4>Current emissions</h4>
                            <p>11.16/block</p>
                        </div>     
                    </div>
                </div>
            </section>
        </>
    );
}

export default Infos;