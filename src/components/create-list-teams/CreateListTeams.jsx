import React from 'react';
import MyList from '../UI/my-list/MyList';
import { Link } from 'react-router-dom';
import EmptyList from '../EmptyList';

const CreateListTeams = ({listTeams, queryList}) => {
           
    const filtredListMatches = listTeams.filter((i) => i.name.toLowerCase().includes(queryList.toLowerCase()));
      
    return (
        <>
            {filtredListMatches.length ===  0
            ? <EmptyList />
            : <MyList>
                {listTeams.filter(
                    (i) => i.name.toLowerCase().includes(queryList.toLowerCase())).map(
                    (i) => <li key={i.id}><Link to={`/soccer-stat-app/list_leagues/teams/matches/${i.id}`}>{i.name}</Link></li>)}
              </MyList>
            }
        </>
    );
};

export default CreateListTeams;
        