import React from 'react'

export default function Filter(props) {
    return (
        <div>
           <select name="filter" onChange={props.onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select> 
        </div>
    )
}
