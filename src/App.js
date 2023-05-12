import Navbar from './Navbar';
import './App.css';
import Item from './Item';
import Footer from './Footer';
import React,{useState} from 'react';
import Itemlist from './Itemlist';

function App() {

  const[Totalprice,setTotalprice]=useState(0);

  const[Qty1,setQty1]=useState(1);

  const[Qty2,setQty2]=useState(1);

  const[Qty3,setQty3]=useState(1);

  const[Qty4,setQty4]=useState(1);

  const[Qty5,setQty5]=useState(1);

  const[Qty6,setQty6]=useState(1);


  const[N1,setN1]=useState(0);

  const[N2,setN2]=useState(0);

  const[N3,setN3]=useState(0);

  const[N4,setN4]=useState(0);

  const[N5,setN5]=useState(0);

  const[N6,setN6]=useState(0);


const[TotItems,setTotItems]=useState(0);

  const handleonclick1=()=>{
  
 setTotalprice(Totalprice+39);
 setQty1(Qty1+1);
 setN1(N1+1);
 setTotItems(TotItems+1);
  }

  const handleonclick2=()=>{
    setTotalprice(Totalprice+59);
    setQty2(Qty2+1);
 setN2(N2+1);
 setTotItems(TotItems+1);
     }

  const handleonclick3=()=>{
    setTotalprice(Totalprice+679);
    setQty3(Qty3+1);
setN3(N3+1);
 setTotItems(TotItems+1);
     }

  const handleonclick4=()=>{
    setTotalprice(Totalprice+19);
    setQty4(Qty4+1);
    setN4(N4+1);
 setTotItems(TotItems+1);
     }

  const handleonclick5=()=>{
    setTotalprice(Totalprice+69);
    setQty5(Qty5+1);
    setN5(N5+1);
 setTotItems(TotItems+1);
     }

  const handleonclick6=()=>{
    setTotalprice(Totalprice+9);
    setQty6(Qty6+1);
    setN6(N6+1);
 setTotItems(TotItems+1);
     }
  
  const handlered1=()=>{
    if(Qty1>1){
    setTotalprice(Totalprice-39);
    setQty1(Qty1-1);
 setN1(N1-1);
 setTotItems(TotItems-1);
    }
  }

  const handlered2=()=>{
    if(Qty2>1){
    setTotalprice(Totalprice-59);
    setQty2(Qty2-1);
setN2(N2-1);
 setTotItems(TotItems-1);
  }
}
 
  const handlered3=()=>{
    if(Qty3>1){
    setTotalprice(Totalprice-679);
    setQty3(Qty3-1);
    setN3(N3-1);
    setTotItems(TotItems-1);
    }
  }

  const handlered4=()=>{
    if(Qty4>1){
    setTotalprice(Totalprice-19);
    setQty4(Qty4-1);
    setN4(N4-1);
    setTotItems(TotItems-1);
    }
  }

  const handlered5=()=>{
    if(Qty5>1){
    setTotalprice(Totalprice-69);
    setQty5(Qty5-1);
    setN5(N5-1);
    setTotItems(TotItems-1);
    }
  }

  const handlered6=()=>{
    if(Qty6>1){
    setTotalprice(Totalprice-9);
    setQty6(Qty6-1);
    setN6(N6-1);
    setTotItems(TotItems-1);
  }
} 

return (
<>
<Navbar Totalprice={Totalprice} sum={TotItems} alpha={N1} beta={N2} gamma={N3} delta={N4} crata={N5} haha={N6} />

<center >
    <div className='container py-3'>
        <div className="row">
        <div className="col-md-4">
      <Item address="https://www.jiomart.com/images/product/600x600/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg" title="Fresh Onion 1kg"  price={39}/>
    <a href="#"  class="btn btn-primary" onClick={handleonclick1} >Add to cart   </a>
    
 <a href="#"  class="btn btn-danger mx-2" onClick={handlered1} >Remove from cart   </a>
      </div>
      <div className="col-md-4 ">
       <Item address="https://www.jiomart.com/images/product/600x600/490861955/madhur-pure-hygienic-sugar-1-kg-product-images-o490861955-p490861955-0-202203141947.jpg" title="Madhur Sugar 1kg" price={59}/>
       <a href="#"  class="btn btn-primary" onClick={handleonclick2} >Add to cart   </a>
 <a href="#"  class="btn btn-danger mx-2" onClick={handlered2} >Remove from cart   </a>
       </div>
       <div className="col-md-4">
       <Item address="https://www.jiomart.com/images/product/original/490010244/gowardhan-pure-cow-ghee-1-l-pouch-product-images-o490010244-p490010244-0-202203150918.jpg" title="Gowardhan Ghee 1kg" price={679}/>
         <a href="#"  class="btn btn-primary" onClick={handleonclick3} >Add to cart   </a>
 <a href="#"  class="btn btn-danger mx-2" onClick={handlered3} >Remove from cart   </a>
       </div>
       </div>
       <div className="row my-5">
       <div className="col-md-4">
      <Item address="https://www.jiomart.com/images/product/original/490000041/aashirvaad-whole-wheat-atta-10-kg-product-images-o490000041-p490000041-0-202207051337.jpg" title="Atta 1kg" price={19}/>
      <a href="#"  class="btn btn-primary" onClick={handleonclick4} >Add to cart   </a>
 <a href="#"  class="btn btn-danger mx-2" onClick={handlered4} >Remove from cart   </a>
      </div>
      <div className="col-md-4 ">
       <Item address="https://www.bigbasket.com/media/uploads/p/xxl/40284288_1-beyond-snack-kerala-banana-chips-hot-sweet-chilli.jpg" title="Banana chips 200g" price={69}/>
       <a href="#"  class="btn btn-primary" onClick={handleonclick5} >Add to cart   </a>
 <a href="#"  class="btn btn-danger mx-2" onClick={handlered5} >Remove from cart   </a>
       </div>
       <div className="col-md-4">
       <Item address="https://www.jiomart.com/images/product/600x600/490985426/saffola-veggie-twist-instant-masala-oats-38-g-product-images-o490985426-p490985426-0-202203150110.jpg" title="Oats 38g" price={9}/>
       <a href="#"  class="btn btn-primary" onClick={handleonclick6} >Add to cart   </a>
 <a href="#"  class="btn btn-danger mx-2" onClick={handlered6} >Remove from cart   </a>
       </div>
       </div>
    </div>
    </center>

    <Footer/> 
</>
  );
}

export default App;
