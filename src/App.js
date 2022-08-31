import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Components/product/product';
// import { SignUP } from './Components/Account/signup';
import {Route,Routes} from "react-router-dom"
import { Mens } from './Components/section/mens';
import { Electronic } from './Components/section/electronic';
import { Womens } from './Components/section/womens';
import { Jewlery } from './Components/section/jewlery';
import { ProductDetails } from './Components/productID/productID';
import { Cart } from './Components/Cart/cart';

import {useState} from "react" ; 
function App() { 

  const [user , setUser] = useState(false) ;
   const handleUser = (data)=>{
       setUser(data)
  }

  return (
    <div className="App">
     <Navbar user = {user}/>
    <Routes> 
      <Route  path = "/" element = {<Product/>}/>
      <Route  path = "/jewlery" element = {<Jewlery/>}/>
      <Route  path = "/electronic" element = {<Electronic/>}/>
      <Route  path = "/womens" element = {<Womens/>}/>
      <Route  path = "/mens" element = {<Mens/>}/>
      <Route  path = "/:id"  element = {<ProductDetails/>} />
      <Route  path = "/cart"  element = {<Cart/>} />
     
    </Routes>
    </div>
  );
}

export default App;
