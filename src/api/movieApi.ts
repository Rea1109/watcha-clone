import instance from './index';

export const latestApi = () => instance.get('/movie/latest');

export const upcomingApi = () => instance.get('/movie/upcoming');

export const nowPlayingApi = () => instance.get('/movie/now_playing');

export const topRatedApi = () => instance.get('/movie/top_rated');

export const popularApi = () => instance.get('/movie/popular');

export const detailApi = (movieId: string) => instance.get(`/movie/${movieId}`);

export const similarApi = (movieId: string) => instance.get(`/movie/${movieId}/similar`);

export const serachApi = (keyword: string) => instance.get(`/serach/movie?query=${keyword}`);
