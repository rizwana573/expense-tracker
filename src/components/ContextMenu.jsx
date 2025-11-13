export const ContextMenu = ({menuPosition, rowId, setExpenses}) => {
    if(!menuPosition) return null;
    return (
        <div className="context-menu" style={menuPosition}>
            <div>Edit</div>
            <div onClick={e => {
            setExpenses(prevState => prevState.filter(expense=> expense.id!== rowId))}
            }>Delete</div>
        </div>
    )
}