import React from "react";

function Transaction({items1}) {
   //map through items and return a table of list
   const displayItems=items1.map((item)=>{
    return (
      <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
    </tr>
    )
  })
  return (
    <>{displayItems}</>
  );
}

export default Transaction;
