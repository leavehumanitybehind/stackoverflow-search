import classes from "./SearchForm.module.css"
import React, { useState } from "react"
import { fetchDataFx } from "../../store/questions"

const SearchForm = ({setVal}) => {
    const [inputVal,setInputVal] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        if (inputVal) {
            await fetchDataFx(inputVal)
        }
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <input type="search" id="search" name="search" value={inputVal} onChange={({target})=>{
                setVal(target.value)
                setInputVal(target.value)}} placeholder="Введите свой вопрос" />
            <button>Поиск</button>
        </form>
    )
}

export default SearchForm