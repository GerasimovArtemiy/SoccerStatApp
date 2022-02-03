import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ListLeagues from './pages/list-leagues/ListLeagues';
import ListMatchesLeague from './pages/list-matches-league/ListMatchesLeague';
import NotFoundPage from './pages/not-found-page/NotFoundPage';


function App() {

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/list_leagues' element={<ListLeagues />} />
          <Route path='/list_leagues/:id' element={<ListMatchesLeague />} />
          <Route path='/about_us' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;