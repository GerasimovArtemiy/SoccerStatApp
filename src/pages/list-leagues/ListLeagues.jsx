import React, { useEffect, useState } from 'react';
import GetLists from '../../components/API/GetLists';
import { useSearchParams, Link } from 'react-router-dom';
import MyList from '../../components/UI/my-list/MyList';
import MyInput from '../../components/UI/my-input/MyInput';



const ListLeagues = () => {
    
    const [listLeague, setListLeague] = useState([]);
    const [searchLeague, setSearchLeague] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    
    const queryList = searchParams.get('name') || '';
    
    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        setSearchLeague(searchValue);
        setSearchParams({name: searchValue });
    }
    console.log(listLeague)
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
         
            <MyInput 
            placeholder='Поиск...Начните вводить название лиги...' 
            type='search' value={searchLeague} onChange={handleSearch} 
            />            
            <MyList>
                {listLeague.filter(
                    (item) => item.name.toLowerCase().includes(queryList.toLowerCase())).map(
                    (item) => {return  <li key={item.id}><Link to={`/list_leagues/${item.id}`}>
                                        Лига: {item.name}
                                        Начало сезона: {item.currentSeason.startDate}
                                        Окончание сезона: {item.currentSeason.endDate}
                                    </Link></li>
                })}
            </MyList>
        </div>
        
    );
};

export default ListLeagues;          