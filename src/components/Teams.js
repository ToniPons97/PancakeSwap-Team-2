import './Teams.scss';
import teamSyrupStorm from '../assets/images/teams-images/syrup-storm-md.png';
import teamFearsomeFlippers from '../assets/images/teams-images/fearsome-flippers-md.png';
import teamChaoticCakers from '../assets/images/teams-images/chaotic-cakers-md.png';

import syrupStormBg from '../assets/images/teams-images/syrup-storm-bg.svg';
import fearsomeFlippersBg from '../assets/images/teams-images/fearsome-flippers-bg.svg';
import chaoticCakersBg from '../assets/images/teams-images/chaotic-cakers-bg.svg'

import { useParams } from 'react-router-dom';

import TeamsList from './TeamsList';
import TeamProfile from './TeamProfile';


const Teams = () => {
    const { id } = useParams();
    const teamsData = [
        {
            id: 1,
            name: 'Syrup Storm',
            description: 'The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!',
            members: '190,030',
            image: teamSyrupStorm,
            backgroundImg: syrupStormBg
        },
        {
            id: 2,
            name: 'Fearsome Flippers',
            description: 'The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!',
            members: '170,518',
            image: teamFearsomeFlippers,
            backgroundImg: fearsomeFlippersBg
        },
        {
            id: 3,
            name: 'Chaotic Cakers',
            description: 'Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!',
            members: '343,134',
            image: teamChaoticCakers,
            backgroundImg: chaoticCakersBg
        },

    ];
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