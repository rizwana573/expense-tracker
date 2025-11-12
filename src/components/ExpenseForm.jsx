import { useState, useRef, useEffect } from "react";

export const ExpenseForm = ({ setExepenses }) => {
  /*/*const [expenseObj, setExpenseObj] = useState({
    title: "",
    category: "",
    amount: "",
  });*/
  const titleRef= useRef(null);
  const categoryRef= useRef(null);
  const amountRef= useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setExepenses((prevState) => [
      ...prevState,
      { title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID() },
    ]);
    /*setExepenses((prevState) => [
      ...prevState,
      { ...expenseObj, id: crypto.randomUUID() },
    ]);
    setExpenseObj({
      title: "",
      category: "",
      amount: "",
    });*/

    /*/*const expense = {...getFormdata(e.target), id:crypto.randomUUID()}
    setExepenses(prevState => [...prevState, expense])
     e.target.reset();
     */
  };

  /*/*const getFormdata = (form) => {
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
        <input
          id="title"
          name="title"
          // value={expenseObj.title}
          // onChange={(e) =>
          //   setExpenseObj((prevState) => ({
          //     ...prevState,
          //     title: e.target.value,
          //   }))
          // }
          ref={titleRef}
        />
      </div>
      <div className="input-container">
        <select
          id="category"
          name="category"
          // value={expenseObj.category}
          // onChange={(e) =>
          //   setExpenseObj((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }))
          // }
           ref={categoryRef}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={expenseObj.amount}
          // onChange={(e) =>
          //   setExpenseObj((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }))
          // }
           ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
