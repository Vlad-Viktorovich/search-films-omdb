import {useAppDispatch, useAppSelector} from '../../store/store';
import s from './Error.module.scss'
import {FC, memo, useEffect} from 'react';
import {setAppError} from '../../Redux/appSlice';
import {clearMoviesData} from '../../Redux/moviesSlice';
import iconClose from './../../assets/img/closeIcon.svg';


export const Error: FC = memo(() => {
    const {error} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setAppError(null));
        }, 4000);
        dispatch(clearMoviesData());
        return () => clearTimeout(timer);
    }, [error, dispatch]);

    const onHideErrorHandler = (): void => {
        dispatch(setAppError(null));
    };

    return (
        <div className={`${s.errorContainer} ${error && s.active}`}>
            <span className={s.message}>{error}</span>
            <span
                role="presentation"
                onClick={onHideErrorHandler}
                style={{backgroundImage: `url(${iconClose})`}}
                className={s.close}
            />
        </div>
    );
});