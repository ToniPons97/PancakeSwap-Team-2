import './Cards.scss';
import bnb from '../assets/images/cards-images/BNB@2x.webp';
import btc from '../assets/images/cards-images/BTC@2x.webp';
import cake from '../assets/images/cards-images/CAKE@2x.webp';
import stonks from '../assets/images/cards-images/stonks@2x.webp';
import pie from '../assets/images/cards-images/pie@2x.webp';
import folder from '../assets/images/cards-images/folder@2x.webp';
import GoToSwapButton from './GoToSwapButton';


const Cards = () => {
    return (
        <>
            <div className="cards" id="cards-1">
                <div className="cards-text">
                <h2 className="cards-h2"> <span className="blue-text">Trade</span> anything. No registration, no hassle.</h2>
                <p>Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>
                <div className="cards-links">
                    <GoToSwapButton btnText='Trade Now'/>
                    <a className="learn-link" href="#">Learn</a>
                </div>
                </div>
                <div id="cards-images" className="cards-image-right cards-images-1">
                <div className="img-1">
                    <img id="cards-img-1" src={bnb} alt="BNB" />
                </div>
                <div className="img-2">
                    <img id="cards-img-2" src={btc} alt="BTC" />
                </div>
                <div className="img-3">
                    <img id="cards-img-3" src={cake} alt="cake" />
                </div>
                </div>
            </div>
            <div id="cards-curve-1-container">
                <svg viewBox="0 0 1660 48" preserveAspectRatio="none" color="text" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z">
                </path>
                </svg>
            </div>
            <div id="cards-2" className="cards">
                <div id="cards-images" className="cards-image-right cards-images-2">
                <div className="img-1">
                    <img id="cards-img-4" src={stonks} alt="stonks" />
                </div>
                <div className="img-2">
                    <img id="cards-img-5" src={pie} alt="pie" />
                </div>
                <div className="img-3">
                    <img id="cards-img-6" src={folder} alt="folder" />
                </div>
                </div>
                <div className="cards-text">
                <h2 className="cards-h2"> <span className="blue-text">Earn</span> passive income with crypto.</h2>
                <p>PancakeSwap makes it easy to make your crypto work for you.</p>
                <div className="cards-links">
                    <button className="trade">Explore</button>
                    <a className="learn-link" href="#">Learn</a>
                </div>
                </div>
            </div>
        </>
    );
}

export default Cards;