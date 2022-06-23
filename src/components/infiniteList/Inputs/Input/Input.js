import css from "../../infList.module.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, {useState} from "react";
import cs from './Input.module.css'


const CustomInput = (props) => {

    const [inp, setInput] = useState('')


    return (

        <div>
            <input placeholder={props.name} className={cs.input}
                   onChange={(e)=>setInput(e.target.value)}
                   type={"text"}/>
            {props.search &&
            <span className={cs.sIcon}>
                <IconButton color={'secondary'} onClick={()=>props.setSearch(inp)} aria-label="delete">
                     <SearchIcon/>
                 </IconButton>
            </span>
            }
        </div>
    )
}

export default CustomInput