import './Currency.scss';
import logoRound512 from '../Full Logo/icon-round-512.png';

const Currency = ({ altColor }) => {
    return (
        <div className='currency'>
            <img src={logoRound512} alt="" />
            <p style={{color: altColor}}>$4.003</p>
        </div>
    );
}

export default Currency;