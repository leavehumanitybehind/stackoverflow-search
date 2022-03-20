import classes from "../Post.module.css"
import Answer from "./Answer"
import User from "./User"

const AnswerItem = ({ user, body }) => {
    return (
        <article className={classes.Answer}>
            <div className={classes.answerWrapp}>
                <User user={user} />
                <Answer body={body} />
            </div>
        </article>

    )
}
export default AnswerItem