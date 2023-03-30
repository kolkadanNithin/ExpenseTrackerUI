import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "../Card/Card"

const Expenses = (props) => {
    
    const [yearSelected,setYear] = useState("2020")

    const filterHandler = (year) => {
        console.log(year)
        setYear(year)
    }
   
    var expenses = props.expenseList.map((expense) => {
        console.log(expense.date.getFullYear())
            if(yearSelected == expense.date.getFullYear()){
                return <ExpenseItem key= {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>
            }
            
            
    }).filter((item)=> item != undefined)
    
    if(expenses.length === 0){
        expenses = <div>No Expenses Found!!!</div>
    }

    return (
        <Card className = "expenses"> 
            <div>
                <ExpensesFilter defaultYear = {yearSelected} filterYear = {filterHandler}></ExpensesFilter>
                {expenses}
            </div>
        </Card>
    )
}

export default Expenses;