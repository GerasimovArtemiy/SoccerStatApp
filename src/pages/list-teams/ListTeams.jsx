import React, { useEffect, useState,  } from 'react';
import { Link, useParams } from 'react-router-dom';
import GetLists from '../../components/API/GetLists';
import MyList from '../../components/UI/my-list/MyList'



const ListTeams = () => {
    
    useEffect(() => {
        fetchList();
    },[]);

    const {id} = useParams();
    const [listTeams, setListTeams] = useState([]);
    const [nameLeague, setNameLeague] = useState('')


     
    
    async function fetchList() {
        const response = await GetLists.getList(`https://api.football-data.org/v2/competitions/${id}/teams?plan=TIER_ONE&status=SCHEDULED`, {
            headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
            setListTeams(response.teams);
            setNameLeague(response.competition.name)
    };

   

    return (
        <MyList>
            <h1>Команды участники: {nameLeague}</h1>
            {listTeams.map((i) => <li key={i.id}><Link to={`/list_leagues/teams/matches/${i.id}`}>{i.name}</Link></li>)}
        </MyList>
    );
};

export default ListTeams;