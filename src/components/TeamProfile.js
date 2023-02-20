import './TeamProfile.scss';
import { Link, useNavigate } from "react-router-dom"


const TeamProfile = ({ teamData }) => {

    const { name, description, image, members } = teamData[0];


    //console.log(teamData);
    return (
        <div className='team-profile'>
            <Link to='/teams'>Teams Overview</Link>
            <div className='team-profile-main'>
                <section className='profile-top'>
                    <img src={image} alt={`${name} team`} />
                    <h3>{name}</h3>
                    <p>{description}</p>
                </section>
                <section className='profile-bottom'>
                    <div className='team-stats'>
                        <div>
                            <img />
                            <h4>{members}</h4>
                            <p>Active members</p>
                        </div>
                        <div>
                            <img />
                            <h4>Coming Soon</h4>
                            <p>TEAM POINTS</p>
                        </div>
                    </div>
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