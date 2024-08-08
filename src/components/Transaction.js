import React from "react";

function Transaction({items1}) {

//function to delete a transaction
  function handleDelete(event){
    let transactionId=event.target.value
    fetch(`http://localhost:8001/transactions/${transactionId}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      window.location.reload()
    })
    .catch(error=>console.log(error))
  }
   //map through items and return a table of list
   const displayItems=items1.map((item)=>{
    return (
      <tr key={item.id} value={item.id} name='name'>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
      <td><button value={item.id} onClick={handleDelete}>DELETE</button></td>
    </tr>
    )
  })

  return (
    <>{displayItems}</>
  );
}

export default Transaction;
