import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/tv" element={<Tv />} />
                <Route path="/tv/:id" element={<TvDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
