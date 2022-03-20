
import { useState } from "react"
import { Link } from "react-router-dom"
import { getTagsTopQuestionsFx } from "../../store/tags"
import { getUserTopTagsFx } from "../../store/user-questions"
import Modal from "../UI/Modal"
import TagsContent from "./Tags/TagsContent"
import UserQuestionsContent from "./User/UserContent"

const TableItem = ({ data }) => {
    const [tagsModal, showTagsModal] = useState(false)
    const [userModal, showUserModal] = useState(false)
    const {
        owner,
        title,
        tags,
        answer_count,
        question_id
    } = data

    return (
        <>
            <tr>
                <td>
                    <button className="author-name" onClick={() => {
                        showUserModal({ state: true, author: owner.display_name })
                        getUserTopTagsFx(owner.user_id)
                    }}>{owner.display_name}</button>
                </td>
                <td >
                    <Link to={`/answers:?id=${question_id}`}>{title}</Link>
                </td>
                <td>
                    <Link to={`/answers:?id=${question_id}`}>{answer_count}</Link>
                </td>
                <td>
                    {tags.length && tags.map(tag => {
                        return <button className="tag" type="button" key={tag} onClick={() => {
                            showTagsModal({ state: true, tag })
                            getTagsTopQuestionsFx(tag)
                        }}>#{tag} </button>
                    })}
                </td>
            </tr>
            {tagsModal.state && <Modal onClose={() => {
                showTagsModal(false)
            }}>
                <TagsContent tag={tagsModal.tag} />
                {userModal.state && <UserQuestionsContent author={userModal.author} />}
            </Modal>}
            {userModal.state && <Modal onClose={() => {
                showUserModal(false)
            }}>
                {userModal.state && <UserQuestionsContent author={userModal.author} />}
            </Modal>}
        </>
    )
}
export default TableItem