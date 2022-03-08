import {useAppSelector} from '../../../store/store';
import s from './SearchResults.module.scss'

export const SearchResults = () => {

    const {totalResults, currentTitle,movies} = useAppSelector(state => state.movies)

    return (
        <div className={s.total}>
            {movies.length > 0 && (
            <h3>
                You searched for: {currentTitle}, {totalResults} results found
            </h3>
            )}
        </div>

    )
}