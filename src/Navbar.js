import React from 'react'
import App from './App'

export default function Navbar(props) {
  return (
    <>
    <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 px-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FreshKart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>

        </li>
        <li>
        </li>
      </ul>

        <button class="btn btn-outline-info px-3" type="submit">
          
            <div className='container mx-2 px-2'>    
     <div className='container mx-2'></div>
       Cart Rs {props.Totalprice}</div>
        </button>
       
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle  mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Items in Cart {props.sum}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">{props.alpha} X Fresh Onion</a></li>
    <li><a class="dropdown-item" href="#">{props.beta} X Madhur Sugar</a></li>
    <li><a class="dropdown-item" href="#">{props.gamma} X Gowardhan Ghee</a></li>
    <li><a class="dropdown-item" href="#">{props.delta} X Atta </a></li>
    <li><a class="dropdown-item" href="#">{props.crata} X Banana chips</a></li>
    <li><a class="dropdown-item" href="#">{props.haha} X Oats</a></li>
  </ul>
</div>

    </div>
  </div>
</nav>
</div>
    </>
  )
}

