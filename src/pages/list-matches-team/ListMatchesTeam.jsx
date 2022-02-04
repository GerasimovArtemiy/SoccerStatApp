import React, { useEffect, useState, } from 'react';
import { Link, useParams } from 'react-router-dom';
import GetLists from '../../components/API/GetLists';
import MyList from '../../components/UI/my-list/MyList';



const ListMatchesTeam = () => {
       
    const {id} = useParams();
    const [listMatchesTeam, setListMatchrsTeam] = useState([]);
    const [nameTeam, setNameTeam] = useState('');
    // const [searchParams, setSearchParams] = useSearchParams();
    // const [inputDate, setInputDate] = useState({from: searchParams.get('dateFrom') || '', to: searchParams.get('dateTo') || ''});

   
        
    useEffect(() => {
        fetchList();
    },[]);
    
    async function fetchList() {
        const responseList = await GetLists.getList(`https://api.football-data.org/v2/teams/${id}/matches?plan=TIER_ONE&status=SCHEDULED`, {
            headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
        const responseName = await GetLists.getList(`https://api.football-data.org/v2/teams/${id}?plan=TIER_ONE&status=SCHEDULED`, {
            headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
        setNameTeam(responseName.name); 
        setListMatchrsTeam(responseList.matches); 
    };

   


    return (
        <div>
            <h1>Все матчи {nameTeam}</h1>
            <MyList>
                {listMatchesTeam.map((i) => <li key={i.id}><Link to=''>Лига:{i.competition.name} Оппоненты: {i.homeTeam.name} -- {i.awayTeam.name} Дата проведения: {i.utcDate}</Link></li>)}
            </MyList>
        </div>
    );
};

export default ListMatchesTeam;