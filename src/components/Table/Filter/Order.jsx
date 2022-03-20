const Order = ({ setOrder }) => {
    return (
        <>
            <button onClick={() => setOrder("asc")}>&uarr;</button>
            <button onClick={() => setOrder("desc")}>&darr;</button>
        </>
    )
}
export default Order