import { useEffect, useState } from "react";
import { Movie, GeneralMovies } from '../../../interfaces/MovieNowPlaying';
import movieAPI from '../../../api/movieAPI';

interface useMovieInterface {
    moviesResponse:   MovieResponse
    isLoading:        boolean
}

interface MovieResponse{
    moviesPlayingNow: Movie[],
    popularMovies:    Movie[],
    topRatedMovies:   Movie[],
    upComingMovies:   Movie[],
}

export const useMovies = (): useMovieInterface => {
    const [responseMovies, setResponseMovies] = useState<MovieResponse>({
        moviesPlayingNow:   [],
        popularMovies:      [],
        topRatedMovies:     [],
        upComingMovies:     [],
    });

    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {        
        const responseMoviesPlayingNow = await movieAPI.get<GeneralMovies>('/now_playing');
        const responsePopularMovies = await movieAPI.get<GeneralMovies>('/popular');
        const responseTopRatedMovies = await movieAPI.get<GeneralMovies>('/top_rated');
        const responseUpComingMovies = await movieAPI.get<GeneralMovies>('/upcoming');

        const responseMovie = await Promise.all([
            responseMoviesPlayingNow,
            responsePopularMovies,
            responseTopRatedMovies,
            responseUpComingMovies
        ]);

        setResponseMovies({
            moviesPlayingNow: responseMovie[0].data.results,
            popularMovies: responseMovie[1].data.results,
            topRatedMovies: responseMovie[2].data.results,
            upComingMovies: responseMovie[3].data.results
        });


        setIsLoading(false)
    }

    useEffect(()=>{
        getMovies();
    }, [])

    return {
        moviesResponse: responseMovies,
        isLoading
    }
}
