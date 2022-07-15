import instance from './index';

export const latestApi = () => instance.get('/tv/latest');

export const airingTodyApi = () => instance.get('/tv/airing_today');

export const onTheAirApi = () => instance.get('/tv/on_the_air');

export const popularApi = () => instance.get('/tv/popular');

export const topRatedApi = () => instance.get('/tv/top_rated');

export const datailApi = (tvId: string) => instance.get(`/tv/${tvId}`);

export const similarApi = (tvId: string) => instance.get(`/tv/${tvId}/similar`);

export const serachApi = (keyword: string) => instance.get(`/serach/tv?query=${keyword}`);
