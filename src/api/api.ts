import axios from 'axios';


const key = 'f19b3d21'

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/'
})

export const Api = {
    getMovies(title: string, page = 1) {
        return instance.get<ResponseType>(`?apikey=${key}&s=${title}&page=${page}`)
    }
}

export type MovieType = {
    Title: string
    Year: string
    Poster: string
    imdbID: string
    Type: string
}

export type ResponseType = {
    Search: MovieType[]
    Response: string
    totalResults: string
    Error: string
}