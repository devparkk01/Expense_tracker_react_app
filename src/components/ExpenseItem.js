
import './ExpenseItem.css' ;



function ExpenseItem(props) {
    // const expenseDate = new Date(2021 , 7 , 25) ;
    // const expenseTitle = "Course Purchase" ;
    // const expensePrice = 21.99  ;

    return (
        <div className = "expense-item">
            <div>{props.date}</div>
            <div className = "expense-item__description">
                <h2>{ props.title }</h2>
                <div className = "expense-item__price">${ props.amount } </div>
            </div>
        </div>
    ); 
}

export default ExpenseItem ;