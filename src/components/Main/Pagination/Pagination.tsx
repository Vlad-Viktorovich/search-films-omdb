import React, {FC, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {fetchMovies, setCurrentPage} from '../../../Redux/moviesSlice';
import s from './Pagination.module.scss'


const portionSize = 10


export const Pagination = () => {

    const {currentTitle, currentPage, totalResults} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    let [portionNumber, setPortionNumber] = useState(1)

    const pages: number[] = []
    const elementsCountInPage = 10
    const commonPageCount = Math.ceil(totalResults / elementsCountInPage)

    for (let i = 1; i <= commonPageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(commonPageCount / portionSize)
    const currentPortion = Math.ceil(currentPage / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    const handlePageChangeClick = (page: number) => {
        dispatch(fetchMovies({title: currentTitle, page}))
        dispatch(setCurrentPage(page))
    }


    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber => portionNumber - 1)
                    handlePageChangeClick((currentPortion - 1) * portionSize)

                }}>prev</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return <span className={currentPage === page ? s.active : s.neactive}
                                 key={page}
                                 onClick={() => handlePageChangeClick(page)}
                    >{page} </span>
                })}
            {currentPage !== pages[pages.length - 1]
                ?
                <span className={currentPage === pages[pages.length - 1] ? s.active : s.neactive}
                      onClick={() => {
                          handlePageChangeClick(pages[pages.length - 1])
                      }}>...{pages[pages.length - 1]}</span>
                : ''
            }
            {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber => portionNumber + 1)
                    handlePageChangeClick(portionSize + currentPage)
                }}>next</button>}
        </div>

    )
}