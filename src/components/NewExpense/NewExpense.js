import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpenseData(expenseData);
    setIsEditing(false) ; 
  };

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };
  const stopEditingHandler = (event) => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">


      {isEditing === false && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

