import './Teams.scss';
import Team from './Team';


const Teams = () => {
    return (
        <div className='teams-main-container'>
            <div className='teams-flex'>
                <h2>Teams & Profiles</h2>
                <p>Show off your stats and collectibles with your unique profile. Team features will be revealed soon!</p>
                <hr />
                <h3>Teams</h3>
                <div className='teams-box-container'>
                    <Team />
                    <Team />
                </div>
            </div>
        </div>
    );
}

export default Teams;