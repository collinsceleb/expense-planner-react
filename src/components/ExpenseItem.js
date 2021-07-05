import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 6, 3);
  // const expensePrice = 295.25;
  // const expenseTitle = "Car Insurance";

  return (
    // This makes use of props
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;