import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ListLeagues from './pages/list-leagues/ListLeagues';
import ListTeams from './pages/list-teams/ListTeams'
import ListMatchesLeague from './pages/list-matches-league/ListMatchesLeague';
import ListMatchesTeam from './pages/list-matches-team/ListMatchesTeam'
import NotFoundPage from './pages/not-found-page/NotFoundPage';


function App() {

  return (
    <div className="App">
      <Routes>

        <Route path='/soccer-stat-app' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/soccer-stat-app/list_leagues' element={<ListLeagues />} />
          <Route path='/soccer-stat-app/list_leagues/matches/:id' element={<ListMatchesLeague />} />
          <Route path='/soccer-stat-app/list_leagues/teams/:id' element={<ListTeams />} />
          <Route path='/soccer-stat-app/list_leagues/teams/matches/:id' element={<ListMatchesTeam />} />
          <Route path='/soccer-stat-app/about_us' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;