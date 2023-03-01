import './Fab.scss';
import fabUpArrow from '../assets/icons/fab-up-arrow.svg';
import { useEffect, useState } from 'react';

const Fab = ({ isFabVisible }) => {
    

    const handleBtnClick = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        isFabVisible &&
        <button id="fab" onClick={handleBtnClick}>
            <div>
            <img src={fabUpArrow} alt="Go back to the top." />
            </div>
        </button>
    );
}

export default Fab;