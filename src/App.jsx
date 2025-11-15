import { useState } from 'react'
import './App.css'
import {ExpenseForm} from "./components/ExpenseForm"
import {ExpenseTable} from "./components/ExpenseTable"
import ExpenseData from "./components/ExpenseData";
import {useLocalStorage} from "../src/hooks/useLocalStorage"


function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses",ExpenseData)
   const [expenseObj, setExpenseObj] = useLocalStorage("expenseObj", {
    title: "",
    category: "",
    amount: "",
  });
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId",'');
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
