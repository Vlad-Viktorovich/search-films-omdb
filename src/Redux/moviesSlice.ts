import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Api, MovieType} from '../api/api';

const movieSlice = createSlice({
        name: 'movies',
        initialState: {
            movies: [] as MovieType[]
        },
        reducers: {}
    }
)


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (_, {dispatch}) => {
        try {
            const res = await Api.getMovies()
            console.log(res)
        } catch (e: any) {

        }
    }
)

export default movieSlice.reducer