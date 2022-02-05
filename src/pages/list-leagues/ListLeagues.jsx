import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ListLeagues.css'
import GetLists from '../../components/API/GetLists';
import Search from '../../components/Search';
import Loader from '../../components/UI/loader/Loader';
import FetchError from '../../components/fetch-error/FetchError';
import CreateListLeague from '../../components/сreate-list-league/CreateListLeague';



const ListLeagues = () => {
    
    const [listLeague, setListLeague] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryList = searchParams.get('name') || '';
    const [searchLeague, setSearchLeague] = useState(queryList);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');
          
        
    useEffect(() => {
        fetchLists();
    },[]);

    async function fetchLists () {
        try {
            setIsLoading(true);
            const response = await GetLists.getList('https://api.football-data.org/v2/competitions?plan=TIER_ONE');
            setListLeague(response.competitions);
            setIsLoading(false);
            setFetchError('');
        }
        catch (err) {
            setFetchError(err.message);
        };
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        setSearchLeague(searchValue);
        setSearchParams({name: searchValue });
    }
      


    return (
        <div>
         
            <h1> Соревнования по футболу</h1>            
            <Search search={searchLeague} handleSearch={handleSearch}/>
            <div className='list'>
                {fetchError === ''
                    ? isLoading 
                        ? <Loader/>
                        : <CreateListLeague listLeague={listLeague} queryList={queryList} />
                    : <FetchError error={fetchError} />                    
                }
                
            </div>

        </div>        
    );
};

export default ListLeagues;          

