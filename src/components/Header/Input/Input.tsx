import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {fetchMovies, setCurrentTitle} from '../../../Redux/moviesSlice';
import {useAppDispatch} from '../../../store/store';


export const Input = () => {

    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(setCurrentTitle(value))
            dispatch(fetchMovies({title: value}))
        }
    }

    return <>
        <input value={value} onChange={changeHandler} onKeyPress={keyPressHandler}/>
    </>
}
