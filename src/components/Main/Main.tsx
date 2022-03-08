import {useAppDispatch, useAppSelector} from '../../store/store';
import {MovieType} from '../../api/api';
import React from 'react';
import {Movie} from './Movie/Movie';
import s from './Main.module.scss'
import {SearchResults} from './SearchResults/SearchResults';
import {Pagination} from './Pagination/Pagination';

export const Main = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector<MovieType[]>(state => state.movies.movies)

    return (
        <div className={s.moviesContainer}>
            <SearchResults/>
            {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
            <Pagination/>
        </div>
    )
}