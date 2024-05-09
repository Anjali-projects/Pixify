import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='a469ca6a0544a924618173cc123331b4'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a469ca6a0544a924618173cc123331b4';

//https://api.themoviedb.org/3/trending/all/day?api_key=a469ca6a0544a924618173cc123331b4
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}