import React from 'react';
import './CreateListLeague.css'
import { Link } from 'react-router-dom';

const CreateListLeague = ({listLeague, queryList}) => {
    return (
        <>
            {listLeague.filter(
                (i) => i.name.toLowerCase().includes(queryList.toLowerCase())).map(
                (i) =>  <div className='list__item' key={i.id}>
                            <div className='list__item_name'>
                                {i.name}                                              
                            </div>
                            <div className='list__item_dates'>
                                {i.currentSeason.startDate}===
                                {i.currentSeason.endDate}
                            </div>
                            <div className='list__item_btns'>
                                <Link to={`/soccer-stat-app/list_leagues/matches/${i.id}`}><button className='list__item_btn btn'>Матчи</button></Link>
                                <Link to={`/soccer-stat-app/list_leagues/teams/${i.id}`}><button className='btn'>Команды</button></Link>
                            </div>
                        </div>
            )}
        </>
    );
};

export default CreateListLeague;