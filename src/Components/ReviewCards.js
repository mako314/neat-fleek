import React from 'react';

function ReviewCards(){

    
    return (
  
<div className="">
    
<li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
</div>
    )
}

export default ReviewCards;

