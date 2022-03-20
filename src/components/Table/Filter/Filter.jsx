import classes from "./Filter.module.css"
import { useEffect, useState } from "react"
import { fetchDataFx } from "../../../store/questions"
import Order from "./Order"


const Filter = ({ searchVal }) => {
    const [order, setOrder] = useState("desc")
    const [sort, setSort] = useState("activity")
    const sortArr = [{ label: "По дате изменения", value: 'activity' }, { label: "Популярные", value: 'votes' },
    { label: "По дате создания", value: 'creation' }]

    const sortHandler = async () => {
        return await fetchDataFx(searchVal, sort, order)
    }
    useEffect(() => {
        if (searchVal) sortHandler()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, order])


    return (
        <div className={classes.Filter}>
            <select onChange={({ target }) => setSort(target.value)}>
                {sortArr.map(({ label, value }) => {
                    return <option key={label} value={value}>{label}</option>
                })}
            </select>
            <Order setOrder={setOrder} />
        </div>
    )
}
export default Filter