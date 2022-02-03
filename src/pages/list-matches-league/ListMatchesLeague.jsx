import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import GetLists from '../../components/API/GetLists';
import MyList from '../../components/UI/my-list/MyList';



const ListMatchesLeague = () => {
    
    const {id} = useParams();
    const [listMatchesLeague, setListMatchrsLeague] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputDate, setInputDate] = useState({from: searchParams.get('dateFrom') || '', to: searchParams.get('dateFrom') || ''});

   
    const rangeDates = useMemo(() => {
        const dateStart = Date.parse(searchParams.get('dateFrom')) || '';
        const dateEnd = Date.parse(searchParams.get('dateTo')) || dateStart;
        let arr = [];
        
        for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
            arr.push(i);
        };
    
        return arr;
    },[searchParams]);
        
    useEffect(() => {
        fetchList();
    },[]);
    
    async function fetchList() {
        const response = await GetLists.getList(`https://api.football-data.org/v2/competitions/${id}/matches?plan=TIER_ONE&status=SCHEDULED`, {
            headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
            setListMatchrsLeague(response.matches);
    };

    function handlerDates(e) {
        e.preventDefault();
        const form = e.target;
        const dateStart = form.dateFrom.value;
        const dateEnd = form.dateTo.value;
        setSearchParams({dateFrom: dateStart, dateTo: dateEnd}); 
    };
    
    function filtredListMatches() {
        if (rangeDates[0] !== '') {
            const filtredArr = listMatchesLeague.filter(i => rangeDates.includes(Date.parse(i.utcDate.substr(0, 10))));
            return filtredArr;
        } else {
            return listMatchesLeague;
        };       
    };


   
    return (
        <div>
            <h1>Запланированные матчи {}</h1>
            <form autoComplete='off' onSubmit={handlerDates}>
                <input type='date' value={inputDate.from} onChange={e => setInputDate({...inputDate, from: e.target.value})} name='dateFrom'/>
                <input type='date' value={inputDate.to} onChange={e => setInputDate({...inputDate, to: e.target.value})} name='dateTo'/>
                <input type='submit' value='Найти'/>
            </form>    
            {listMatchesLeague.length === 0 
            ? <div>
                К сожалению, у нас нет информации о матчах этой лиги
              </div>
            : <MyList>
                {filtredListMatches().map((match) => {
                    return <li key={match.id}>
                    <Link to=''>
                        Команда хозяин: {match.homeTeam.name}
                        Команда гость: {match.awayTeam.name}
                        Дата проведения: {match.utcDate}
                    </Link>
                    </li>
                })}
              </MyList>   
            } 
                
        </div>
    );
};

export default ListMatchesLeague;