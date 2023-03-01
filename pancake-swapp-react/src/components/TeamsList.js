import Team from './Team';

const TeamsList = ({teamsData}) => {
    return (
        <>
            <h3>Teams</h3>
            <div className='teams-box-container'>
                {
                    teamsData.map((t, i) =>
                        <Team
                            key={i}
                            index={t.id}
                            name={t.name}
                            description={t.description}
                            members={t.members}
                            image={t.imageName}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TeamsList;