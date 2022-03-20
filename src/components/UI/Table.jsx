import classes from "./UI.module.css"

const Table = ({ thead, children }) => {
    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    {thead.map(item => {
                        return <th key={item}>{item}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>

        </table>
    )
}

export default Table