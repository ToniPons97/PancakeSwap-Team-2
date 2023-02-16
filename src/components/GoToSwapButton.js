import { useNavigate } from "react-router-dom";

const GoToSwapButton = ({ btnText, classes = '' }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/swap');
        window.scrollTo(0, 0);
    }
    return <button onClick={handleClick} className={classes}><b>{btnText}</b></button>;
}

export default GoToSwapButton;