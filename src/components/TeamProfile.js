import './TeamProfile.scss';
import { Link, useNavigate } from "react-router-dom";
import teamTrophy from '../assets/icons/trophy.svg';
import teamUser from '../assets/icons/teams-user.svg';


const TeamProfile = ({ teamData }) => {
    const { name, description, image, members, backgroundImg } = teamData[0];

    return (
        <div className='team-profile'>
            <Link to='/teams'>&lt; Teams Overview</Link>
            <div className='team-profile-main'>
                <section className='profile-top'>
                    <img className='team-bg-img' src={backgroundImg} />
                    <img src={image} alt={`${name} team`} />

                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </section>
                <section className='profile-middle'>
                    <div>
                        <img src={teamUser} />
                        <div className='team-stats'>
                            <h4>{members}</h4>
                            <p>ACTIVE MEMBERS</p>
                        </div>
                    </div>
                    <div>
                        <img src={teamTrophy} />
                        <div className='team-stats'>
                            <h4>Coming Soon</h4>
                            <p>TEAM POINTS</p>
                        </div>
                    </div>
                </section>
                <section className='profile-bottom'>
                    <div className='team-achievements'>
                        <h4>Team Achievements</h4>
                        <div>
                            <img alt='Coming soon' />
                        </div>
                        <p>Coming Soon!</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeamProfile;