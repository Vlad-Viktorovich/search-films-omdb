import React from 'react';
import './App.css';
import {Header} from '../components/Header/Header';
import {Main} from '../components/Main/Main';
import preloader from '../assets/Preloader/Preloader.gif'
import {useAppSelector} from '../store/store';
import {Error} from '../components/Error/Error';

function App() {

    const {status} = useAppSelector(state=>state.app)

    return (
        <div className="App">
            <Header/>
            <Main/>
            <div>
                {status === 'loading' && (
                    <div>
                        <img src={preloader} alt="loader"/>
                    </div>
                )}
            </div>
            <Error/>
        </div>
    );
}

export default App;
