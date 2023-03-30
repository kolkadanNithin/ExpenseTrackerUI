import React from "react";
import Card from "../Card/Card"
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = (props)=> {
    return(
        <Card className = "expense-item">
            <div className="expense-item">
                <h2 className="expense-item h2">{props.title}</h2>
                <h2>{props.amount}</h2>
                <ExpenseDate date = {props.date}/>
            </div>
        </Card>
        
    )
}

export default ExpenseItem;