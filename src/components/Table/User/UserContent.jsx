import { useStore } from "effector-react"
import {$userTopQuestions, getUserTopQuestionsFx, getUserTopTagsFx } from "../../../store/user-questions"
import Loader from "../../UI/Loader"

const UserQuestionsContent = ({author}) => {
    const topQuestions = useStore($userTopQuestions)
    const loadingQuestions = useStore(getUserTopQuestionsFx.pending)
    const loadingTags = useStore(getUserTopTagsFx.pending)
    const loading = loadingQuestions || loadingTags

    return (
        <>
        <h3>Самые популярные вопросы автора {author}</h3>
        {loading && <Loader />}
        {!loading && topQuestions.items &&
        <ul>
            {topQuestions.items && topQuestions.items.map(({question_id, title, link}) => {
                return (
                    <li key={question_id}>
                        <a href={link} target="_blank">{title}</a>
                    </li>
                )
            })}
        </ul>}
        {!loading && !topQuestions.items && <p>Данных нет</p>}
        </>
    )}

export default UserQuestionsContent