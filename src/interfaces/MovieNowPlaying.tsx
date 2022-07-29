export interface GeneralMovies {
    dates?:         Dates;
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

enum OriginalLanguage {
    En = "en",
    Ja = "ja",
}
