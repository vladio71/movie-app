import {useEffect, useState} from "react";
import {Api} from "../../../Api/movies";
import Movie from "../../Movie/Movie";
import css from './List.module.css'
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ScrollList = () => {

    const [movies, setMovies] = useState([])
    const [recnder, setRender] = useState([])
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        Api.getNewTitles().then(
            result=>{
                 setMovies(result)
            }
        )
     },[])

    const maxIndex = movies.filter(m => m.primaryImage != null).length/6 -1

    return (
        <div className={css.back}>
             <div className={css.list}>
                <div className={css.inner}
                style={{transform:`translateX(-${index * 100}%)`}}>
                    {movies.filter(m => m.primaryImage != null).map(m => {
                        return <Movie {...m}/>
                    })}
                </div>
                <div className={css.buttons}>
                    <IconButton color={'secondary'} onClick={()=> {
                        if(index==0){
                            setIndex(maxIndex)
                            console.log(maxIndex)
                            return
                        }
                        setIndex(index - 1)
                    }}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <IconButton color={'secondary'}  onClick={()=> {
                        if(index == maxIndex){
                            setIndex(0)
                            return
                        }
                        setIndex(index + 1)
                    }}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default ScrollList