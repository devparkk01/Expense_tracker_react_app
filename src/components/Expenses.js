import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( (expense) => (
     expense.date.getFullYear().toString()  === filteredYear)  
  ) 


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
          />
        <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
