import { useStore } from "effector-react"
import { $questions } from "../../store/questions"
import Table from "../UI/Table"
import Filter from "./Filter/Filter"
import TableItem from "./TableItem"

const MainTable = ({searchVal}) => {
    const {items} = useStore($questions)
     if (!items) return null

    return (
        <>
        <Filter searchVal={searchVal} />
        <Table thead={["Автор вопроса", "Тема", "Количество ответов", "Теги"]}>
            {items && items.map(el => {
                return <TableItem key={el.question_id} data={el} />
            })}
        </Table>
        </>
    )
}

export default MainTable