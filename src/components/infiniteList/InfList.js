import React, {useCallback, useRef, useState, useEffect} from "react";
import {useFetch, useUtilsFetch} from "../../Api/movies";
import Movie from "../Movie/Movie";
import css from './infList.module.css'


const InfiniteList = (props) => {
    console.log('list')

    const [page, setPage] = useState(1)
    const {list,setList} = useFetch(props.search, page, props.params);
    const loader = useRef(null)
    useEffect(()=>{
        setPage(1)
        setList([])
    }, [props.params, props.search])

    const handleObserver = useCallback((entries) => {
        const tartget = entries[0]
        if (tartget.isIntersecting) {
            setPage(prev => prev + 3)
        }
    }, [])

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <div className={css.wrapper}>
            {list.length != 0 ?
            <div className={css.flex}>

                {list.filter(m => m.primaryImage != null).map((m, key) => {
                    return <Movie key={key} {...m}/>
                })}
            </div>
                :
                <div>
                    LOADING..
                </div>
            }
            <div ref={loader}/>

        </div>
    )
}

export default InfiniteList