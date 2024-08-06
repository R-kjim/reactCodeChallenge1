import React from "react";


function Search({handleSearch}) {
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}//once change is made to this input, the value is assigned to the word state
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
