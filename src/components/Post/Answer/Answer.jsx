const Answer = ({ body }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: body }}>
        </div>
    )
}

export default Answer