import './TeamProfile.scss';
import { Link } from "react-router-dom";
import teamTrophy from '../assets/icons/trophy.svg';
import teamUser from '../assets/icons/teams-user.svg';
import teamComingSoon from '../assets/icons/team-coming-soon.svg';
import teamGoBack from '../assets/icons/teams-go-back.svg';

import { useEffect } from 'react';


const TeamProfile = ({ teamData }) => {
    const { name, description, members, imageBg, imageName, lightText } = teamData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='team-profile'>
            <div className='team-nav'>
                <img src={teamGoBack} alt='Go back' />
                <Link to='/teams'>
                    Teams Overview
                </Link>
            </div>
            <div className='team-profile-main'>
                <section className='profile-top'>
                    <img className='team-bg-img' src={require('../assets/images/teams-images/' + imageBg)} />
                    <img src={require('../assets/images/teams-images/' + imageName)} alt={`${name} team`} />

                    <div>
                        <h3 style={lightText ? {color: '#fff'} : {color: '#191326'}}>{name}</h3>
                        <p style={lightText ? {color: '#fff'} : {color: '#191326'}}>{description}</p>
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
                        <div id='disabled-stat' className='team-stats'>
                            <h4>Coming Soon</h4>
                            <p>TEAM POINTS</p>
                        </div>
                    </div>
                </section>
                <section className='profile-bottom'>
                    <h4>Team Achievements</h4>
                    <div className='team-achievements'>
                        <div>
                            <img src={teamComingSoon} alt='Coming soon' />
                            <p>Coming Soon!</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TeamProfile;