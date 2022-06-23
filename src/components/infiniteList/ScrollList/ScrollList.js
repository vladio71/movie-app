import {useEffect, useState} from "react";
import {Api} from "../../../Api/movies";
import Movie from "../../Movie/Movie";
import css from './List.module.css'
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {motion, useAnimation} from "framer-motion"

const ScrollList = () => {

    const [movies, setMovies] = useState([])
    const [recnder, setRender] = useState([])
    const [index, setIndex] = useState(0)





    useEffect(() => {
        Api.getNewTitles().then(
            result => {
                setMovies(result)
            }
        )
    }, [])

    const maxIndex = Math.floor(movies.filter(m => m.primaryImage != null).length / 6 - 1)
    const remainingIndex = (movies.filter(m => m.primaryImage != null).length / 6 - 1) % 1

    const handleRight = ()=>{
        if (index == maxIndex && remainingIndex > 0.1) {
            setIndex(prevState => prevState + remainingIndex*1.1)
            return
        }
        if(index > maxIndex){
            setIndex(0)
            return;
        }
        setIndex(prev=> prev+1)
    }
     const handleLeft = ()=>{
         if(index > maxIndex){
             setIndex(Math.floor(index))
             return;
         }
         if (index == 0) {
             setIndex(maxIndex + remainingIndex*1.1)
              return
         }
         setIndex((prev) => prev - 1)
    }


    // style={{transform: `translateX(-${index * 100}%)`}}


     return (
        <div className={css.back}>
            <div className={css.list}>

                <div
                    className={css.inner}
                    style={{transform: `translateX(-${index * 100}%)`}}
                     >
                    {movies.filter(m => m.primaryImage != null).map((m,key) => {
                        return <Movie key={key} {...m}/>
                    })}
                </div>
                <div className={css.buttons}>
                    <div className={css.caption}>
                        comming
                    </div>
                    <div className={css.captionRight}>
                        soon
                    </div>
                    <IconButton color={'secondary'} onClick={handleLeft}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <IconButton color={'secondary'} onClick={handleRight}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default ScrollList