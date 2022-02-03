import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetLists from '../../components/API/GetLists';
import MyList from '../../components/UI/my-list/MyList';

const ListMatchesLeague = () => {
    
    const {id} = useParams();
    const [listMatchesLeague, setListMatchrsLeague] = useState([]);
    
    
    useEffect(() => {
        fetchList();
    },[]);
    
    async function fetchList() {
        const response = await GetLists.getList(`https://api.football-data.org/v2/competitions/${id}/matches?plan=TIER_ONE&status=SCHEDULED`, {
            headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
            setListMatchrsLeague(response.matches);
    };

    console.log(listMatchesLeague);

    
    
    return (
        <div>
            <h1>Запланированные матчи</h1>
                 
            {listMatchesLeague.length === 0 
            ? <div>
                К сожалению, у нас нет информации о матчах этой лиги
              </div>
            : <MyList>
                {listMatchesLeague.map((match) => {
                    return <li key={match.id}>
                    <a>
                        Команда хозяин: {match.homeTeam.name}
                        Команда гость: {match.awayTeam.name}
                        Дата проведения: {match.utcDate}
                    </a>
                    </li>
                })}
              </MyList>   
            } 
                
        </div>
    );
};

export default ListMatchesLeague;