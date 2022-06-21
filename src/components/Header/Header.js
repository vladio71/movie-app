import sa from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import {useState} from "react";


function Header() {
    const [inp, setInput] = useState('')
    return (
        <div className={sa.header}>
            <input placeholder={'сеарчЛимитедЕдишн'} className={sa.input} onChange={(e) => setInput(e.target.value)}
                   type={"text"}/>
            <span className={sa.sIcon}>
                <IconButton color={'secondary'} aria-label="delete">
                     <SearchIcon/>
                 </IconButton>
            </span>

        </div>
    );
}

export default Header