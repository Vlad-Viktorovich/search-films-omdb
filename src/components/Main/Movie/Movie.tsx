import {MovieType} from '../../../api/api';
import s from './Movie.module.scss'
import NotFoundPhoto from '../../../assets/img/NotFoundPoster.svg'

export const Movie = ({Poster, Title, Year, imdbID, Type}: MovieType) => {

    return (
        <div className={s.movieContainer}>
            <img className={s.poster} src={Poster !== 'N/A' ? Poster : NotFoundPhoto}/>
            <div className={s.title}>
                <span>Name:{Title}</span>
                <span>Year:{Year}</span>
                <span>imdbID:{imdbID}</span>
                <span>Type:{Type}</span>
            </div>
        </div>
    )
}