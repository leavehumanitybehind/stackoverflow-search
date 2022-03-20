import { useStore } from "effector-react"
import React, { useState } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"
import MainTable from "../../components/Table/MainTable"
import Loader from "../../components/UI/Loader"
import { fetchDataFx } from "../../store/questions"

const MainPages = () => {
    const [searchVal, setVal] = useState('')
    const loading = useStore(fetchDataFx.pending)
    
    return (
        <section className="container">
             <SearchForm setVal={setVal} />
            {loading && <Loader />}
            <MainTable searchVal={searchVal} />
        </section>
           

    )
}
export default MainPages