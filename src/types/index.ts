export type User = {
    birthdate: string;
    email: string;
    idDB: string;
    name: string;
    password: string;
    role: string;
}

export type Item = {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id: number;
    idDB?: string;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
    media_type: string;
    name?: string;
    first_air_date?: string;
    checked?: boolean;
};

type Collection = {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
}

type Genre = {
    id: number;
    name: string;
}

type ProductionCompany = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

type ProductionCountry = {
    iso_3166_1: string;
    name: string;
}

type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type ItemById = {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection: null | Collection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type ImgById = {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number; 
    vote_count: number;
    width: number;
}