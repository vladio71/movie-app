import axios from 'axios'
import {useCallback, useEffect, useState} from "react";


const instance = axios.create({
    baseURL: 'https://data-imdb1.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46',
        'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com'
    }
});


export const Api = {
    getNewTitles: async () => {
        const result = await instance.get('titles/', {
            params: {
                info: 'base_info',
                limit: '50',
                year: '2022'
            }
        })
        console.log(result)
        return result.data.results
    },
}

export function useFetch(page) {
     const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const [list, setList] = useState([])

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true)
            await setError(false)
            const result = await instance.get('titles', {
                params: {
                    info: 'base_info',
                    limit: '10',
                    year: '2021',
                    page: page
                }
            })
            await setList ((prev)=>[...prev,...result.data.results])
            setLoading(false)
        } catch (e) {
            setError(e)
        }

    })
    useEffect(()=>{
         console.log(fetch)
        sendQuery()
    },[page])

    return {list, loading, error}
}
