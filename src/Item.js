import React,{useState} from 'react'
import App from './App'
export default function Item(props) {
 
  return (

    <div className='container' >
      <div class="card text-bg-light mb-3" style={{width: "18rem"}}>
  <img src={props.address} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
 
<a href="#" class="btn btn-info mx-2" >Rs {props.price}</a>
    </div>
</div>
  </div>

   
  )
}
