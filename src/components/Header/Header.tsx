import {Input} from './Input/Input';
import s from './Header.module.scss'

export const Header = () => {


    return (
        <div className={s.headerContainer}>
            <span className={s.name}>Movie catalog</span>
            <Input/>
        </div>
    );
};