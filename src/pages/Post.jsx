import { useStore, useStoreMap } from "effector-react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AnswerItem from "../components/Post/Answer/AnswerItem";
import Question from "../components/Post/Question/Question";
import Loader from "../components/UI/Loader";
import { $questionAnswer, getQuestionAnswersFx } from "../store/answers";
import { $question, $questions, fetchQuestionFx } from "../store/questions";

const Post = () => {
    const navigate = useNavigate()
    const [search] = useSearchParams();
    const loading = useStore(getQuestionAnswersFx.pending)
    const { items } = useStore($questionAnswer)
    const questions = useStore($questions)
    const questionItem = useStore($question)

    const id = search.get('id')

    const question = useStoreMap({
        store: $questions,
        keys: [id],
        fn: (questions, [questionId]) => {
            if (questions.items && questions.items.length) {
                return questions.items.find((({ question_id }) => {
                    return +question_id === +questionId
                }))
            } else {
                return questionItem[0]
            }
        }
    })

    useEffect(() => {
        if (!questions.items) {
            fetchQuestionFx(id)
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getQuestionAnswersFx(id)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="question">
            <button onClick={() => { navigate(`/`) }}>Назад</button>
            <Question question={question} />
            {loading && <Loader />}
            <div>
                <h4>Ответы: </h4>
                {items && items.map(({ answer_id, body, owner }) => {
                    return (
                        <AnswerItem key={answer_id} user={owner} body={body} />
                    )
                })}
            </div>
            {!loading && items && !items.length && <p>Ответов пока нет</p>}
        </section>
    )
}

export default Post;