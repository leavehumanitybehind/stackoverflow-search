const Question = ({question}) => {
    if (!question) return null
    return (
        <div className="question__wrapper">
        <p>{question.owner.display_name}</p>
        <h3>{question.title}</h3>
        <div>
            {question.tags.map(tag => {
                return <span className="tag" key={tag}>#{tag} </span>
            })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: question.body }}></div>
    </div>
    )
        
}

export default Question