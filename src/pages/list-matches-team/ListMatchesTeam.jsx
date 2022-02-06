import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import GetLists from '../../components/API/GetLists';
import FilterDates from '../../components/UI/filter-dates/FilterDates';
import Loader from '../../components/UI/loader/Loader';
import FetchError from '../../components/fetch-error/FetchError';
import CreateMatchesTeam from '../../components/create-matches-team/CreateMatchesTeam';



const ListMatchesTeam = () => {
       
    const {id} = useParams();
    const [listMatchesTeam, setListMatchrsTeam] = useState([]);
    const [nameTeam, setNameTeam] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputDate, setInputDate] = useState({from: searchParams.get('dateFrom') || '', to: searchParams.get('dateTo') || ''});
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');

           
    useEffect(() => {
        
        async function fetchList() {
            try {
                setIsLoading(true);
                const responseList = await GetLists.getList(`https://api.football-data.org/v2/teams/${id}/matches?plan=TIER_ONE&status=SCHEDULED`);
                const responseName = await GetLists.getList(`https://api.football-data.org/v2/teams/${id}?plan=TIER_ONE&status=SCHEDULED`);
                setNameTeam(responseName.name); 
                setListMatchrsTeam(responseList.matches);
                setIsLoading(false);
                setFetchError('');
            }
            catch (err) {
                setFetchError(err.message);
            };
            
        };

        fetchList();
    },[id]);
    
    function handlerDates(e) {
        e.preventDefault();
        const form = e.target;
        const dateStart = form.dateFrom.value;
        const dateEnd = form.dateTo.value;
        setSearchParams({dateFrom: dateStart, dateTo: dateEnd}); 
    };
    
    const rangeDates = useMemo(() => {
        const dateStart = Date.parse(searchParams.get('dateFrom')) || '';
        const dateEnd = Date.parse(searchParams.get('dateTo')) || dateStart;
        let arr = [];
        
        for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
            arr.push(i);
        };
    
        return arr;
    },[searchParams]);

    function filtredListMatches() {
        if (rangeDates[0] !== '') {
            const filtredArr = listMatchesTeam.filter(i => rangeDates.includes(Date.parse(i.utcDate.substr(0, 10))));
            return filtredArr;
        } else {
            return listMatchesTeam;
        };       
    };
    
   

    return (
        <div>
            
            <h1>Матчи: {nameTeam}</h1>
            <FilterDates handlerDates={handlerDates} inputDate={inputDate} setInputDate={setInputDate} />
            {fetchError === ''
                ? isLoading
                    ?   <Loader />
                    :   <CreateMatchesTeam filtredListMatches={filtredListMatches}/>
                : <FetchError error={fetchError}/>
            }
            
        </div>
    );
};

export default ListMatchesTeam;