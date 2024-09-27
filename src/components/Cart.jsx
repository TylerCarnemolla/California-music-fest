import surf from '../assets/images/surf.jpg'
const Cart = ({cartItems, removeItem}) =>{

  const cartTotal = () =>{
    return cartItems.reduce((total, item) => total + item.price, 0)
  }
    return(
        <div style={{backgroundImage:`url(${surf})`}}
        className=" mx-auto bg-cover flex flex-col items-center h-screen bg-fixed bg-right">
           <div id="booga" className="flex flex-col h-screen   bg-white bg-opacity-50 w-9/12  shadow-2xl">
              
                <p className='mt-40 m-10 rubik-burned-regular text-5xl'>Tickets Provided by...</p>
                
                <p className='text-6xl bg-red-500 w-1/2 text-center border-8 border-black danfo mx-10'>LIVE VIBES</p>
                  

                <h2 className='mt-40 mx-10  rubik-burned-regular text-5xl flex justify-center'>Shopping Cart</h2>
                

                
                  <div className=' m-20'>
                      <div className='p-20 flex justify-between border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300' >
                        <div>
                        <p className='mb-10 rubik-burned-regular text-2xl'>Your Items</p>
                        {cartItems.length > 0 ? (
                        <ul className=''>
                          {cartItems.map((item, index) => (
                            <li key={index} className='flex m-2 text-xl justify-between'>
                              {item.name} - ${item.price} <button className=" bg-cyan-300 mx-5 rounded-md hover:bg-cyan-400" onClick={() => removeItem(index)}>Delete</button>
                            </li>
                          ))}
                        </ul>
                        ):(
                          <p>Your cart is empty</p>
                        )}
                        </div>
                      
                      
                      <div>
                        <div className=' text-center mb-10'>
                          <p className='text-2xl mb-2'>Order Summary</p>
                          <p className='text-xl'>Tickets will be sent to your email</p>
                          <p className='text-xl'>Downloadable to your apple wallet</p>
                        </div>
                        
                        <div className='text-center flex flex-col'>
                        <input className="m-3" type="text" placeholder='Enter Promo Code' />
                        <button className='bg-cyan-300 mx-5 rounded-md hover:bg-cyan-400 '>Submit </button>

                        <p className='m-3'>Quantity: {cartItems.length} tickets</p>
                        <p className='m-3'>Total: ${cartTotal()}</p>
                        
                        <button className='m-3 bg-cyan-300 mx-5 rounded-md hover:bg-cyan-400' onClick={() => alert("Thank you for your purchase! Please make sure you recieved your confermation in your email.")}>Proceed to Checkout</button>
                        </div>
                      </div>
                      </div>

                      
                  </div>
            
            
          </div>

      </div>
    );
};export default Cart