import './Teams.scss';

// import syrupStormBg from '../assets/images/teams-images/syrup-storm-bg.svg';
// import fearsomeFlippersBg from '../assets/images/teams-images/fearsome-flippers-bg.svg';
// import chaoticCakersBg from '../assets/images/teams-images/chaotic-cakers-bg.svg'

import { useParams } from 'react-router-dom';

import TeamsList from './TeamsList';
import TeamProfile from './TeamProfile';
import { useEffect, useState } from 'react';



const Teams = () => {
    const { id } = useParams();
    const [ teamsData, setTeamsData ] = useState([]);
    const apiUrl = 'http://localhost:5050/api/team';

    const fetchData = async (url) => {
        const res = await fetch(url);
        const jsonRes = await res.json();
        setTeamsData(jsonRes);
    }

    useEffect(() => {
        fetchData(apiUrl);
    }, []);
    
    return (
        <div className='teams-main-container'>
            <div className='teams-flex'>
                <h2>Teams & Profiles</h2>
                <p>Show off your stats and collectibles with your unique profile. Team features will be revealed soon!</p>
                <hr />

                {
                    id ? <TeamProfile 
                            teamData={teamsData.filter(team => team.id === Number(id))}
                        /> 
                        : <TeamsList teamsData={teamsData}/>
                }
                
            </div>
        </div>
    );
}

export default Teams;