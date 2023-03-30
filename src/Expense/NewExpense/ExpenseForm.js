import React,{useState} from "react"; 

const ExpenseForm = (props) =>{

const [enteredTitle,setTitle] = useState("")
const [enteredAmount,setAmount] = useState("")
const [enteredDate,setDate] = useState("")
const [buttonValue,setButtonValue] = useState(true)


const titleChangeHandler = (event) =>{
    event.preventDefault();
    // console.log(event.target.value)
    setTitle(event.target.value)
}
const amountChangeHandler = (event) =>{
    event.preventDefault();
    setAmount(event.target.value)
}
const dateChangeHandler = (event) =>{
    event.preventDefault();
    setDate(event.target.value)
}

const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    const enteredData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    // console.log(enteredData)
    props.addExpense(enteredData)

    setTitle(" ");
    setAmount(" ")
    setDate(" ")

}

const clickHandler = () => {
    setButtonValue(!buttonValue)
}
var render = <div>
    <button onClick = {clickHandler}>Add New Expense</button>
</div>
if(buttonValue === false){
    render = <form  onSubmit={submitHandler} className = "new-expense__controls">
    <label>Title</label>
    <input type="text"
    value={enteredTitle}
    onChange={titleChangeHandler}/>

    <label>Amount</label>
    <input type="number"
    value={enteredAmount}
    onChange={amountChangeHandler}/>
    <label>Date</label>
    <input type="date"
    value={enteredDate}
    onChange={dateChangeHandler}/>
    {/* <input type="submit" value="Submit"></input> */}
    <button type ="submit">Add Expense</button>
    <button onClick={clickHandler}>Cancel</button>
    </form>
}


    return (
        <div>
            {render}   
        </div>
    )
}

   

export default ExpenseForm