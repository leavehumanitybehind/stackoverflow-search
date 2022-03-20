import { useStore } from "effector-react"
import { $tags, getTagsTopQuestionsFx } from "../../../store/tags"
import Loader from "../../UI/Loader"
import Table from "../../UI/Table"

const TagsContent = ({ tag }) => {
    const tagsStore = useStore($tags)
    const loading = useStore(getTagsTopQuestionsFx.pending)

    return (
        <>
            <h3>Самые популярные вопросы по тегу #{tag}</h3>
            {loading && <Loader />}
            {!loading && <Table thead={["Автор вопроса", "Тема", "Количество ответов", "Теги"]}>
                {tagsStore.items && tagsStore.items.map(({ owner, title, tags, answer_count }) => {
                    return (
                        <tr key={owner.user_id}>
                            <td>
                                {owner.display_name}
                            </td>
                            <td>
                                {title}
                            </td>
                            <td>
                                {answer_count}
                            </td>
                            <td>
                                {tags.length && tags.map(tag => {
                                    return <span key={tag} >#{tag} </span>
                                })}
                            </td>
                        </tr>
                    )
                })}


            </Table>}
        </>
    )
}

export default TagsContent