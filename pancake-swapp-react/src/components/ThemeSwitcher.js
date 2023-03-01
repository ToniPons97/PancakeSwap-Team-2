import './ThemeSwitcher.scss';

import moonBg from '../assets/icons/footer-btn-moon-bg.svg';
import sunBg from '../assets/icons/footer-btn-sun-bg.svg';
import sunBtn from '../assets/icons/theme-btn-sun.svg';
import moonBtn from '../assets/icons/theme-btn-moon.svg';
import { useState } from 'react';

const ThemeSwitcher = () => {
    const [activeImg, setActiveImg] = useState(sunBtn);

    const handleCheckbox = (event) => 
        setActiveImg(event.target.checked ? moonBtn : sunBtn);

    return (
        <div id="theme-checkbox">
            <img src={sunBg} alt="" />
            <img src={moonBg} alt="" />
            <input onClick={handleCheckbox} type="checkbox" name="theme" id="theme-selection" />
            <label htmlFor="theme-selection">
                <img id="f-theme-icon" src={activeImg} alt="" />
            </label>  
        </div>
    );
}

export default ThemeSwitcher;