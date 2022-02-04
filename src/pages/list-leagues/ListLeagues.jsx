import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './ListLeagues.css'
import MyInput from '../../components/UI/my-input/MyInput';
import GetLists from '../../components/API/GetLists';



const ListLeagues = () => {
    
    const [listLeague, setListLeague] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryList = searchParams.get('name') || '';
    const [searchLeague, setSearchLeague] = useState(queryList);
        
          
    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        setSearchLeague(searchValue);
        setSearchParams({name: searchValue });
    }
    
    useEffect(() => {
        fetchLists();
    },[]);

    async function fetchLists () {
        const response = await GetLists.getList('https://api.football-data.org/v2/competitions?plan=TIER_ONE', {
        headers: {'X-Auth-Token': process.env.REACT_APP_KEY_API}});
        setListLeague(response.competitions);
    };

      

    return (
        <div>
         
            <h1> Соревнования по футболу</h1>
            <MyInput 
            placeholder='Поиск...Начните вводить название лиги...' 
            type='search' value={searchLeague} onChange={handleSearch} 
            />            
            <div className='list'>
                {listLeague.filter(
                    (item) => item.name.toLowerCase().includes(queryList.toLowerCase())).map(
                    (item) => 
                    {return  <div className='list_item' key={item.id}>
                                <div>
                                    Лига: {item.name}
                                    Начало сезона: {item.currentSeason.startDate}
                                    Окончание сезона: {item.currentSeason.endDate}
                                </div>
                                <div>
                                <Link to={`/list_leagues/matches/${item.id}`}><button>Матчи</button></Link>
                                <Link to={`/list_leagues/teams/${item.id}`}><button>Команды</button></Link>
                                </div>


                            </div>
                })}
            </div>
        </div>
        
    );
};

export default ListLeagues;          