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
        const result = await instance.get('titles/x/upcoming', {
            params: {
                info: 'base_info',
                limit: '50',
            }
        })
        return result.data.results
    },
}

export function useFetch(keyword, page, params) {

    if (keyword == '') keyword = 'hero'
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const [list, setList] = useState([])
    params['page']=page

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true)
            await setError(false)
            const result = await instance.get(`titles/search/keyword/${keyword}`, {
                params: params
            })
            await setList((prev) => [...prev, ...result.data.results])
            setLoading(false)
        } catch (e) {
            setError(e)
        }

    }, [keyword, page])
    useEffect(() => {
        sendQuery()
    }, [keyword, page])

    return {list, setList}
}

export function useUtilsFetch() {
    const [genres, setGanres] = useState([])
    const [types, setTypes] = useState([])

    const Query = useCallback(async () => {
        try {
            const tResult = await instance.get('titles/utils/titleTypes')
            setTypes(tResult.data.results)
            const gResult = await instance.get('titles/utils/genres')
            setGanres(gResult.data.results)
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        Query()
    }, [])

    return {genres, types}

}