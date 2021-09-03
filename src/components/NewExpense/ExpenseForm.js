import React , {useState} from "react" ; 
import "./ExpenseForm.css" ; 


const ExpenseForm = (props) =>{
    const [enteredTitle , setEnteredTitle] = useState('') ; 
    const [enteredAmount , setEnteredAmount] = useState('') ; 
    const [enteredDate , setEnteredDate] = useState('') ; 

    const updateTitleHandler = (event) => {
        setEnteredTitle(event.target.value) ; // updating the title as soon as it gets changed
    }
    const updateAmountHandler = (event ) => {
        setEnteredAmount(event.target.value) ; // updating the amount as soon as it gets changed
    }
    const updateDateHandler = (event) => {
        setEnteredDate(event.target.value) ; // updating the date as soon as it gets changed
    }


    // for saving the new expense data when the form is submitted
    const formSubmitHandler = (event) => {
        event.preventDefault() ; //in this case ,used to prevent browser reload or refresh on submitting the form
        const newData = {
            title : enteredTitle , 
            amount : parseFloat(enteredAmount) , 
            date : new Date(enteredDate) 
        } ; 
        props.onSaveExpenseData(newData) ; 

    }

    return (
        <form onSubmit = {formSubmitHandler } >
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type = "text" onChange = {updateTitleHandler} />
                </div>
                <div className = "new-expense__control">
                    <label >Amount</label>
                    <input type = "number" min = "0.01" step = "0.01" onChange = {updateAmountHandler} />
                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type = "date" min = "2019-01-01"  max = "2022-12-31" onChange = {updateDateHandler} />
                </div>
            </div>


            <div className = "new-expense__actions">  
                <button type = "button" onClick = {props.onCancel} > Cancel </button>
                <button type = "submit">Add expense</button>
            </div>
            
                
        </form>
    )
} 

export default ExpenseForm ; 