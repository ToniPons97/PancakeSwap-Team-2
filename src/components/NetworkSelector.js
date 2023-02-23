import './NetworkSelector.scss';
import bnb from '../assets/images/navbar-images/bnb.png';
import eth from '../assets/images/navbar-images/etherium.png';
import aptos from '../assets/images/navbar-images/aptos.png';

import { useRef, useState } from 'react';

const NetworkSelector = () => {
    const [networkTitle, setNetworkTitle] = useState('BNB Smart Chain');
    const [networkImg, setNetworkImg] = useState(bnb);

    const netSelectionRef = useRef(null);

    const handleNetSelection = (event) => {
        const clickedEl = event.target;
        const textTitle = clickedEl.textContent;
        setNetworkTitle(prev => textTitle);
        const selectedClass = 'navbar-network-selected'

        const anchorTagsArr = Array.from(netSelectionRef.current.querySelectorAll('a'));
        anchorTagsArr.forEach(a => {
            if(a.classList.contains(selectedClass))
                a.classList.remove(selectedClass)
        });

        if (clickedEl.tagName === 'LI') {
            setNetworkImg(prev => clickedEl.firstChild.src);
            clickedEl.lastChild.classList.add(selectedClass);
        } else if (clickedEl.tagName === 'A') {
            setNetworkImg(prev => clickedEl.previousElementSibling.src);
            clickedEl.classList.add(selectedClass);
        }

        setTimeout(() => netSelectionRef.current.style['display'] = 'none', 0);
        setTimeout(() => netSelectionRef.current.style['display'] = '', 70);
    }    
    
    return (
        <li id="select-network-wrapper">
            <div id="select-network">
                <img id="selection-icon" src={networkImg} alt="" />
                <p>
                    {networkTitle}
                </p> 
                <svg id="network-down-arrow" viewBox="0 0 24 24" color="text" width="24px" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 
                    17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 
                    6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                </path>
                </svg>
                <ul ref={netSelectionRef} id="network-selection"> 
                    <li>
                        <a href="#">
                        Select a Network
                        </a>
                    </li>
                    <li onClick={handleNetSelection}>
                        <img src={bnb} alt="" />
                        <a href="#" className="navbar-network-selected">
                        <span>BNB Smart Chain</span>
                        </a>
                    </li>
                    <li onClick={handleNetSelection}>
                        <img src={eth} alt="" />
                        <a href="#">
                        Ethereum
                        </a>
                    </li>
                    <li onClick={handleNetSelection}>
                        <img src={aptos} alt="" />
                        <a href="#">
                        Aptos
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
}
export default NetworkSelector;