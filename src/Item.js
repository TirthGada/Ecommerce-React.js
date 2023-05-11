import React,{useState} from 'react'

export default function Item(props) {
 
  return (

    <div className='container' >
      <div class="card text-bg-light mb-3" style={{width: "18rem"}}>
  <img src={props.address} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
 
<a href="#" class="btn btn-info mx-2" >Rs {props.price}</a>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Qty 1
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
  </ul>
</div>
  </div>
</div>
    </div>
  )
}
