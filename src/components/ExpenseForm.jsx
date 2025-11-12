import { useState, useRef, useEffect } from "react";

export const ExpenseForm = ({ setExepenses }) => {
  const [expenseObj, setExpenseObj] = useState({
    title: "",
    category: "",
    amount: "",
  });
  /***const titleRef= useRef(null);
  const categoryRef= useRef(null);
  const amountRef= useRef(null);***/

  const [error, setError] = useState({});
  const validate = (formData) => {
    const errorsData ={};
    if(!formData.title){
      errorsData.title="Title is required"
    }
    if(!formData.category){
      errorsData.category="Category is required"
    }
    if(!formData.amount){
      errorsData.amount="Amount is required"
    }
    setError(errorsData);
    return errorsData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateRes = validate(expenseObj);
    /***setExepenses((prevState) => [
      ...prevState,
      { title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID() },
    ]);***/

    if(Object.keys(validateRes).length===0){
    setExepenses((prevState) => [
          ...prevState,
          { ...expenseObj, id: crypto.randomUUID() },
        ]);
    }
    setExpenseObj({
      title: "",
      category: "",
      amount: "",
    });

    /**const expense = {...getFormdata(e.target), id:crypto.randomUUID()}
    setExepenses(prevState => [...prevState, expense])
     e.target.reset();**/
  };

  /**const getFormdata = (form) => {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  };**/
  const handleChange = (e) => {
     setExpenseObj((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      })
    )
    setError({});
  } 
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expenseObj.title}
          onChange={handleChange}
          /***ref={titleRef}***/
        />
        <p className="error">{error.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expenseObj.category}
          onChange={handleChange}
          /***ref={categoryRef} */ 
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
         <p className="error">{error.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expenseObj.amount}
          onChange={handleChange}
          /*** ref={amountRef} */
        />
         <p className="error">{error.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
