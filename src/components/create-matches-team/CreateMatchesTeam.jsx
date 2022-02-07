import React from 'react';
import { Link } from 'react-router-dom';
import EmptyList from '../empty-list/EmptyList';
import MyList from '../UI/my-list/MyList';

const CreateMatchesTeam = ({filtredListMatches}) => {
    return (
        <>
            {!filtredListMatches().length
                ? <EmptyList />
                : <MyList>
                    {filtredListMatches().map(
                        (i) => <li key={i.id}>
                            <Link to=''>                                  
                                <span>Команды:</span> {i.homeTeam.name} - {i.awayTeam.name} <span>Дата:</span> {i.utcDate.substr(0, 16)}
                            </Link></li>
                    )}
                  </MyList>
            }
            
        </>
            
    );
};

export default CreateMatchesTeam;