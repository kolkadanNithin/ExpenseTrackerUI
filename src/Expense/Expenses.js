import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "../Card/Card"

const Expenses = (props) => {
    
    
    return (
        <Card className = "expenses"> 
            <div>
                {props.expenseList}
            </div>
        </Card>
    )
}

export default Expenses;