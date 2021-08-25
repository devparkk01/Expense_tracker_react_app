
import './ExpenseItem.css' ;



function ExpenseItem() {
    return (
        <div className = "expense-item">
            <div>25th August 2021 </div>
            <div className = "expense-item__description">
                <h2>Course Purchase</h2>
                <div className = "expense-item__price">$21.99</div>
            </div>
        </div>
    ); 
}

export default ExpenseItem ;