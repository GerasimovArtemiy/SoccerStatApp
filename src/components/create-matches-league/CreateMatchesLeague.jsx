import React from 'react';
import MyList from '../UI/my-list/MyList'
import { Link } from 'react-router-dom'
import EmptyList from '../EmptyList';

const CreateMatchesLeague = ({filtredListMatches}) => {
    return (
        <>
            {filtredListMatches().length === 0
                ? <EmptyList />
                : <MyList>
                    {filtredListMatches().map((match) => {
                    return <li key={match.id}>
                        <Link to=''>
                            Оппоненты: {match.homeTeam.name} - {match.awayTeam.name}
                            Дата проведения: {match.utcDate.substr(0, 16)}
                        </Link>
                        </li>
                    })}
                  </MyList>
            }
            
        </>
    );              
};

export default CreateMatchesLeague;