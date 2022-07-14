import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/tv" element={<Tv />} />
                <Route path="/tv/:id" element={<TvDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
