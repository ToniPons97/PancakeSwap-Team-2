import './TeamProfile.scss';
import { Link } from "react-router-dom";
import teamTrophy from '../assets/icons/trophy.svg';
import teamUser from '../assets/icons/teams-user.svg';
import teamComingSoon from '../assets/icons/team-coming-soon.svg';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBackLink from './GoBackLink';

const TeamProfile = () => {
    const endpoint = 'http://localhost:5050/api/team';
    const { id } = useParams();

    const [team, setTeam] = useState(null);

    const fetchData = async () => {
        const res = await fetch(`${endpoint}/${id}`);
        const jsonRes = await res.json();
        setTeam(jsonRes);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!team)
            fetchData();
    }, [team]);

    return (
        <>
            {
                team ? <div className='team-profile'>
                    <GoBackLink linkText='Teams Overview' to='/teams' />
                    <div className='team-profile-main'>
                        <section className='profile-top'>
                            <img className='team-bg-img' src={require('../assets/images/teams-images/' + team?.imageBg)} />
                            <img src={require('../assets/images/teams-images/' + team?.imageName)} alt={`${team.name} team`} />

                            <div>
                                <h3 style={team.lightText ? { color: '#fff' } : { color: '#191326' }}>{team.name}</h3>
                                <p style={team.lightText ? { color: '#fff' } : { color: '#191326' }}>{team.description}</p>
                            </div>
                        </section>
                        <section className='profile-middle'>
                            <div>
                                <img src={teamUser} />
                                <div className='team-stats'>
                                    <h4>{team.members}</h4>
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
                    : <h2>Team not found</h2>

            }
        </>
    );
}

export default TeamProfile;