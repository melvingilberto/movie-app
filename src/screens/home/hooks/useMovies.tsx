import { useEffect, useState } from "react";
import { Movie, MovieNowPlaying } from '../../../interfaces/MovieNowPlaying';
import movieAPI from '../../../api/movieAPI';

interface useMovieInterface {
    moviesPlayingNow: Movie[],
    isLoading: boolean
}

export const useMovies = (): useMovieInterface => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesPlayingNow, setMoviesPlayingNow] = useState<Movie[]>([]);

    const getMovies = async () => {        
        const responseMoviesPlayingNow = await movieAPI.get<MovieNowPlaying>('now_playing');
        const moviesPlayingNow = responseMoviesPlayingNow.data.results;
        setMoviesPlayingNow(moviesPlayingNow);
        setIsLoading(false)
    }

    useEffect(()=>{
        getMovies();
    }, [])

    return {
        moviesPlayingNow,
        isLoading
    }
}
