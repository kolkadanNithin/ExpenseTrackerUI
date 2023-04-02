import NewExpense from './Expense/NewExpense/NewExpense';
import './App.css';
import Expenses from './Expense/Expenses';
import { useState } from 'react';
import ExpensesFilter from './Expense/ExpenseFilter/ExpenseFilter'; 
import ExpenseItem from './Expense/ExpenseItem';
import Chart from './Chart/Chart';


var expenseList = [
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,7,14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021,2,12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021,2,28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
]
// expenseList.forEach((value)=>{
//   console.log(value.date)
// })


var dataPoints = [
  {
    value:0,
    label:"Jan",
    maxValue:0
  },
  {
    value:0,
    label:"Feb",
    maxValue:0
  },
  {
    value:0,
    label:"Mar",
    maxValue:0
  },
  {
    value:0,
    label:"Apr",
    maxValue:0
  },
  {
    value:0,
    label:"May",
    maxValue:0
  },
  {
    value:0,
    label:"Jun",
    maxValue:0
  },
  {
    value:0,
    label:"Jul",
    maxValue:0
  },
  {
    value:0,
    label:"Aug",
    maxValue:0
  },
  {
    value:0,
    label:"Sep",
    maxValue:0
  },
  {
    value:0,
    label:"Oct",
    maxValue:0
  },
  {
    value:0,
    label:"Nov",
    maxValue:0
  },
  {
    value:0,
    label:"Dec",
    maxValue:0
  }
]

function App() {
  const [expenses,setNewExpenseList] = useState(expenseList)
  //////////

  const [yearSelected,setYear] = useState("2020")

    const filterHandler = (year) => {
        console.log(year)
        setYear(year)
    }
   
    var expensesListed = expenses.map((expense) => {
        console.log(expense.date.getFullYear())
            if(yearSelected == expense.date.getFullYear()){
              
              
                return <ExpenseItem key= {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>
            }
            
            
    }).filter((item)=> item != undefined)
    
    dataPoints.map(expense => {
      console.log(expense)
    })

    if(expensesListed.length === 0){
      expensesListed = <div>No Expenses Found!!!</div>
    }

  //////////////////
  console.log("APP.JS")
  ///////////////////
  
  const newExpenseLoader = (newExpenseData) => {
  
    const data = {id:Math.random(),
    ...newExpenseData}
    
    setNewExpenseList((prevState) => {
      return ([
        data,
        ...prevState
      ]);
    })
  }


  

    return (
      <div>
        {/* <h2>This is it</h2> */}
        <Chart expenseList = {expensesListed}></Chart>
        <NewExpense newExpenseLoader = {newExpenseLoader}/>
        <ExpensesFilter defaultYear = {yearSelected} filterYear = {filterHandler}></ExpensesFilter>
        <Expenses expenseList={expensesListed}></Expenses>
      </div>
    );
}

export default App;
