import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {


    const addExpense = (enteredData) => {
        // console.log(enteredData)
        props.newExpenseLoader(enteredData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm addExpense = {addExpense}></ExpenseForm>
        </div>
        
    )
}

export default NewExpense