import React, {useCallback, useState} from "react";
import CustomInput from "../Inputs/Input/Input";
import CustomSelect from "../Inputs/Select/Select";
import css from "../infList.module.css";
import Movie from "../../Movie/Movie";
import  InfiniteList from "../InfList";
import {useUtilsFetch} from "../../../Api/movies";


const Search = () => {

     const [year, setYear] = useState('')
    const [search, setSearch] = useState('')
    const[paramsObj, setParamsObj] = useState({
        info: 'base_info',
        limit: '30',
        sort:'year.decr'
    })
    const {genres, types} = useUtilsFetch()

    const handleSelects = (name, value)=>{
         if(value == '') {
            delete paramsObj[name]
            setParamsObj(prevState => {
                return{
                    ...paramsObj
                }
            })
             return
        }
        paramsObj[name] = value
        setParamsObj(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
     }


    const handleYearInput = useCallback((e) => {
        setYear(e.target.value)
    }, [])


    return(
        <>
            <div className={css.back}>
                <div className={css.marginCenter}>
                    <CustomInput search={true}  setSearch={setSearch}
                                 name={'Search'}/>
                    <CustomSelect items={genres} name={'Genres'} />
                    <CustomSelect items={types} objName={'titleType'} name={'Types'} handle={handleSelects}/>
                    <CustomInput  handleInput={handleYearInput} name={'Year'}  />
                    <CustomSelect  items={['year.incr', 'year.decr']} objName={'sort'} name={'Sorting'} handle={handleSelects}/>
                 </div>
                <InfiniteList search={search} params={paramsObj}/>

            </div>

        </>
    )
}

export default Search