import goBack from '../assets/icons/teams-go-back.svg';
import { Link } from 'react-router-dom';
import './GoBackLink.scss';

const GoBackLink = ({linkText = '', to = ''}) => {
    return (
        <div className='link-nav'>
            <img src={goBack} alt='Go back' />
            <Link to={to}>
                {linkText}
            </Link>
        </div>
    );
}

export default GoBackLink;