export const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  rowId,
  setExpenses,
  setExpenseObj,
  expense,
  setEditingRowId
}) => {
  if (!menuPosition || !menuPosition.left) return null;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const {title, category,amount}=expense.find((exp)=>exp.id ===rowId );
          setEditingRowId(rowId);
          setExpenseObj({title, category,amount});
          setMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  );
};
