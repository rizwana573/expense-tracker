import { useState } from 'react'
import './App.css'
import {ExpenseForm} from "./components/ExpenseForm"
import {ExpenseTable} from "./components/ExpenseTable"
import {ContextMenu} from "./components/ContextMenu"
import ExpenseData from "./components/ExpenseData";

function App() {
  const [expenses, setExepenses] = useState(ExpenseData)
  const [query, setQuery] = useState("All");
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExepenses={setExepenses} />
        <ExpenseTable expense={expenses} query={query} setQuery={setQuery}/>
        <ContextMenu />
      </div>
    </main>
    </>
  )
}

export default App
