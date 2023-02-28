import './Teams.scss';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Leaderboard | PancakeSwap</title>
            </Helmet>
            <div className='teams-flex'>
                <h2>Teams & Profiles</h2>
                <p>Show off your stats and collectibles with your unique profile. Team features will be revealed soon!</p>
                <hr />

                { id ? <TeamProfile /> : <TeamsList teamsData={teamsData}/> }
                
            </div>
        </div>
    );
}

export default Teams;