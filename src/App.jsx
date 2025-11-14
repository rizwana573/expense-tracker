import { useState } from 'react'
import './App.css'
import {ExpenseForm} from "./components/ExpenseForm"
import {ExpenseTable} from "./components/ExpenseTable"
import ExpenseData from "./components/ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData)
   const [expenseObj, setExpenseObj] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useState('');
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} expenseObj ={expenseObj} setExpenseObj={setExpenseObj} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
        <ExpenseTable expense={expenses} setExpenses={setExpenses} setExpenseObj={setExpenseObj} setEditingRowId={setEditingRowId}/>
      </div>
    </main>
    </>
  )
}

export default App
