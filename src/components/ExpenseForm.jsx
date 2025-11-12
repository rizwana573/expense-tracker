import {useState} from "react";

export const ExpenseForm = ({setExepenses}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {title,category, amount, id:crypto.randomUUID() }
    setExepenses(prevState => [
      ...prevState, expense
    ]);
    setTitle(" ");
    setCategory(" ");
    setAmount(" ");
    /*const expense = {...getFormdata(e.target), id:crypto.randomUUID()}
    setExepenses(prevState => [...prevState, expense])
     e.target.reset();
     */
   
  };
  /*const getFormdata = (form) => {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  };*/
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" value={title} onChange= {e => setTitle(e.target.value)}/>
      </div>
      <div className="input-container">
        <select id="category" name="category" value={category} onChange = {e=> setCategory(e.target.value)}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" value={amount} onChange={e=> setAmount(e.target.value)}/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
