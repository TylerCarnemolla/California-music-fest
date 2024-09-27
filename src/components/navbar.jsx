import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/font.css'

const  MyNavbar =({cartItems}) =>{
    return(
<nav className='bg-cyan-300 fixed w-full z-50' >
        
        <div className="flex justify-between p-5  " >
            <div className='flex flex-col items-center'>
                <p className='rubik-scribble-regular font-black'>California Kings</p>
                <p className='rubik-scribble-regular font-black'>Fesival</p>
                <p className='rubik-scribble-regular font-black'>Venice Beach, CA</p>
            </div>

            <div className="flex items-center underline"><Link to="/" >Home</Link></div>
            <div  className="flex items-center underline"><Link to="/Lineup" >Line up</Link></div>
            <div  className="flex items-center underline"><Link to="/SchedulePage" >Schedule</Link></div>
            <div  className="flex items-center underline"><Link to="/BuyTickets" >Buy Tickets</Link></div>
            <div  className="flex items-center underline"> <Link to="/Contact" >Contact Us</Link></div>
            
            
            <Link to="Cart">Shopping Cart: {cartItems.length}</Link>
        </div>
 
</nav>
    )
}
export default MyNavbar