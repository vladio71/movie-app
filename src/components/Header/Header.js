import sa from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import {useState} from "react";


function Header() {
     return (
        <div className={sa.header}>
            <img  className={sa.img} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'}/>



        </div>
    );
}

export default Header