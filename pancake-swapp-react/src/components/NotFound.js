import './NotFound.scss';
import psBunny from '../Full Logo/bunny-color.svg';

import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    
    const handleBtnClick = () => {
        navigate('/');
    }

    return (
        <div className="not-found-container">
            <img src={psBunny} alt='Pancake Swap bunny.'/>
            <h1>404</h1>
            <p>Oops, page not found.</p>
            <button onClick={handleBtnClick}>Back Home</button>
        </div>
    );
}

export default NotFound;