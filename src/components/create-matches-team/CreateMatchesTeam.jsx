import React from 'react';
import { Link } from 'react-router-dom';
import EmptyList from '../EmptyList';
import MyList from '../UI/my-list/MyList';

const CreateMatchesTeam = ({filtredListMatches}) => {
    return (
        <>
            {filtredListMatches().length === 0
                ? <EmptyList />
                : <MyList>
                    {filtredListMatches().map(
                        (i) => <li key={i.id}>
                            <Link to=''>
                                 Лига:{i.competition.name} 
                                Оппоненты: {i.homeTeam.name} -- {i.awayTeam.name} 
                                Дата проведения: {i.utcDate}
                            </Link></li>
                    )}
                  </MyList>
            }
            
        </>
            
    );
};

export default CreateMatchesTeam;