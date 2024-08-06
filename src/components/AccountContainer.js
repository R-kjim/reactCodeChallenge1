import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import { useEffect } from "react";
import { useState } from "react";

function AccountContainer() {
  // const [newArray,arrayFn]=useState(false)
//  const [situation,situationFn]=useState()
  const [data,dataFn]=useState([])//sets state for dta to be fetched to an empty array
  const [word,wordFn]=useState('')//sets state for search string in Search
  
  //use Effect to fetch data from our database
  const fetchData=useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(res=>res.json())
    .then(data=>dataFn(data))//after fetching, state of data is assigned the fetched data
  },[])

  //define a function handleSearchFn that will handlechange of an input in Search and change state of word
  function handleSearchFn(event){
    wordFn(event.target.value)//state of word changes to the input value
  }

  //filter what is rendered on Transaction List based on search
  const filterSearch=data.filter((item)=>{
    if(item.description.toLowerCase().includes(word.toLowerCase()) || item.category.toLowerCase().includes(word.toLowerCase())) return item//displays items based on partial search
    else if(word==='') return true;
  })


  
  //define a function that handles data added through the form
  function submitFn(event){
    event.preventDefault()

    const newObj={
      id:data.length+1,
      date:event.target.date.value,
      description:event.target.description.value,
      category:event.target.category.value,
      amount:event.target.amount.value
    }
    const updatedArr=[...data,newObj]
    // dataFn(updatedArr)
    fetch("http://localhost:8001/transactions",{
      method:"POST",
      body:JSON.stringify(newObj),
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res=>{
      if(res.ok===true){dataFn(updatedArr)}
    })
    event.target.reset()
  }
  
  return (
    <div>
      <Search handleSearch={handleSearchFn}/>
      <AddTransactionForm submitHandle={submitFn}/>
      <TransactionsList items={filterSearch}/>
    </div>
  );
}

export default AccountContainer;
