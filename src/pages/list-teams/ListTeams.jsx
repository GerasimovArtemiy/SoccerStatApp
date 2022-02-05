import React, { useEffect, useState,  } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import GetLists from '../../components/API/GetLists';
import CreateListTeams from '../../components/create-list-teams/CreateListTeams';
import FetchError from '../../components/fetch-error/FetchError';
import Search from '../../components/Search';
import Loader from '../../components/UI/loader/Loader';



const ListTeams = () => {
    
    const {id} = useParams();
    const [listTeams, setListTeams] = useState([]);
    const [nameLeague, setNameLeague] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const queryList = searchParams.get('name') || '';
    const [searchTeam, setSearchTeam] = useState(queryList);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');
    
    
    useEffect(() => {
        
        async function fetchList() {
            try {
                setIsLoading(true);
                const response = await GetLists.getList(`https://api.football-data.org/v2/competitions/${id}/teams?plan=TIER_ONE&status=SCHEDULED`);
                setListTeams(response.teams);
                setNameLeague(response.competition.name);
                setIsLoading(false);
                setFetchError('');
            }
            catch (err) {
                setFetchError(err.message);
            };            
        };

        fetchList();
    },[id]);

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        setSearchTeam(searchValue);
        setSearchParams({name: searchValue });
    }
    
   
    
    return (
        <div>
            
            <h1>Команды участники: {nameLeague}</h1>
            <Search search={searchTeam} handleSearch={handleSearch} />
            {fetchError === ''
                ? isLoading
                    ?   <Loader/>
                    :   <CreateListTeams listTeams={listTeams} queryList={queryList} />
                : <FetchError error={fetchError} />
            }
            
        </div>
    );
};

export default ListTeams;
   
