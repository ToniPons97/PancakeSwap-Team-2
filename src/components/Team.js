import './Team.scss';
import teamTrophy from '../assets/icons/trophy.svg';
import teamUser from '../assets/icons/teams-user.svg';

const Team = () => {
    return (
        <div className='team'>
            <div className='team-index'>1</div>
            <div className='team-content'>
                <h3>Syrup Storm</h3>
                <p>The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!</p>
                <ul>
                    <li>
                        <img src={teamTrophy} alt='' />
                        <p>Coming Soon</p>
                    </li>
                    <li>
                        <img src={teamUser} />
                        <p>190,023</p>
                    </li>
                </ul>
            </div>
            <div className='team-extra'>
                <button>See More</button>
                <div role='img' aria-label='Syrup team.' />
            </div>
        </div>
    );
}

export default Team;