import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import MyNavbar from './components/navbar'
import routes from './config/routes'
import Footer from './components/footer'

import React, {useState} from 'react'
function App() {
  const [cartItems, setCartItems] = useState([]);



  const addToCart = (item) =>{
    setCartItems([...cartItems, item])
  }

 const removeItem = (indexToRemove) =>{
  setCartItems((prevCart)=> prevCart.filter((item,index) => index !== indexToRemove));
 };

  return (
    <>
     <BrowserRouter>
     <MyNavbar cartItems={cartItems}/>
     <Routes>
      {routes.map((route, index) => (
          <Route
          key ={index}
          path = {route.path}
          element = {<route.component cartItems={cartItems} addToCart={addToCart} removeItem={removeItem}/> }
          />
      ))}

     </Routes>
     
     <Footer/>
    
     </BrowserRouter>
    </>
  )
}

export default App
