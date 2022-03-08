import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Api, MovieType} from '../api/api';
import {setAppError, setAppStatus} from './appSlice';

const moviesSlice = createSlice({
        name: 'movies',
        initialState: {
            movies: [] as MovieType[],
            totalResults: 0 as number,
            currentTitle: '' as string,
            currentPage: 1 as number,
        },
        reducers: {
            setMovies(state, action: PayloadAction<MovieType[]>) {
                state.movies = action.payload
            },
            setTotalResults(state, action: PayloadAction<string>) {
                state.totalResults = +action.payload
            },
            setCurrentTitle(state, action: PayloadAction<string>) {
                state.currentTitle = action.payload
            },
            setCurrentPage: (state, {payload}: PayloadAction<number>) => {
                state.currentPage = payload;
            },
            clearMoviesData: state => {
                state.movies = [];
            },
        }
    }
)

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async ({title, page}: { title: string, page?: number }, {dispatch}) => {
        try {
            dispatch(setAppStatus('loading'))
            const {data} = await Api.getMovies(title, page)
            if (data.Response === 'True') {
                dispatch(setMovies(data.Search))
                dispatch(setTotalResults(data.totalResults))
            } else {
                dispatch(setAppError(data.Error))
            }

        } catch (e: any) {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.message))

        } finally {
            dispatch(setAppStatus('succeeded'))
        }
    }
)
export const {setMovies, setTotalResults, setCurrentTitle, setCurrentPage, clearMoviesData} = moviesSlice.actions
export default moviesSlice.reducer