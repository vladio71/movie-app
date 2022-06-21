import React, {useCallback, useRef, useState, useEffect} from "react";
import {useFetch} from "../../Api/movies";
import Movie from "../Movie/Movie";
import css from './infList.module.css'

const InfiniteList = () => {
    const [page, setPage] = useState(1)
    const {list, error, loading} = useFetch(page);
    const loader = useRef(null)

    const handleObserver = useCallback((entries) => {
        const tartget = entries[0]
        if (tartget.isIntersecting) {
            setPage(prev => prev + 1)
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
        <>
            {list.length != 0 &&
            <div  className={css.flex}>
                {list.filter(m => m.primaryImage != null).map(m => {
                    return <Movie {...m}/>
                })}
            </div>
            }
            <div ref={loader}/>

        </>
    )
}

export default InfiniteList