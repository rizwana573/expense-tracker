import { useState, useRef, useEffect } from "react";
import { Input } from "./Input.jsx";
import { Select } from "./Select.jsx";

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
    const errorsData = {};

    const validationConfig = {
      title: [
        {
          required: true,
          message: "Please enter a title",
        },
        {
          minLength: true,
          message: "Title should be at least 5 characters long",
        },
      ],
      category: [
        {
          required: true,
          message: "Please select a category",
        },
      ],
      amount: [
        {
          required: true,
          message: "Please enter an amount",
        },
      ],
    };

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (!value && rule.required) {
          errorsData[key] = rule.message;
          return true;
        }
        if (value.length < 5 && rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });
    /*if(!formData.title){
      errorsData.title="Title is required"
    }
    if(!formData.category){
      errorsData.category="Category is required"
    }
    if(!formData.amount){
      errorsData.amount="Amount is required"
    }*/
    setError(errorsData);
    return errorsData;
  };

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

    if (Object.keys(validateRes).length === 0) {
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
    }));
    setError({});
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expenseObj.title}
        onChange={handleChange}
        error={error.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expenseObj.category}
        onChange={handleChange}
        error={error.category}
        defaultVal="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expenseObj.amount}
        onChange={handleChange}
        error={error.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};
