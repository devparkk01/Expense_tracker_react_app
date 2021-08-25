
import './ExpenseItem.css' ;



function ExpenseItem() {
    const expenseDate = new Date(2021 , 7 , 25) ;
    const expenseTitle = "Course Purchase" ;
    const expensePrice = 21.99  ;

    return (
        <div className = "expense-item">
            <div>{ expenseDate.toISOString() }</div>
            <div className = "expense-item__description">
                <h2>{ expenseTitle }</h2>
                <div className = "expense-item__price">${ expensePrice } </div>
            </div>
        </div>
    ); 
}

export default ExpenseItem ;