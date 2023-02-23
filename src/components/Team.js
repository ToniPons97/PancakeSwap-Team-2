import './Team.scss';
import teamTrophy from '../assets/icons/trophy.svg';
import teamUser from '../assets/icons/teams-user.svg';
import { useNavigate } from 'react-router-dom';

const Team = ({ index, name, description, members, image }) => {
    const navigate = useNavigate();


    const handleClick = () => {
        const profile =  `${window.location.pathname}/${index}`;

        navigate(profile);
    }

    return (
        <div className='team'>
            <div className='team-index'>{index}</div>
            <div className='team-content'>
                <h3>{name}</h3>
                <p>{description}</p>
                <ul>
                    <li>
                        <img src={teamTrophy} alt='' />
                        <p>Coming Soon</p>
                    </li>
                    <li>
                        <img src={teamUser} alt='' />
                        <p>{members.toLocaleString('en-US')}</p>
                    </li>
                </ul>
            </div>
            <div className='team-extra'>
                <button onClick={handleClick}>See More</button>
                <img src={require('../assets/images/teams-images/' + image)} alt={`${name} team`}/>
            </div>
        </div>
    );
}

export default Team;