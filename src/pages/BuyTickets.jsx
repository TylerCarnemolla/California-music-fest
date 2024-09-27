import surf from '../assets/images/surf.jpg'
import { Link } from 'react-router-dom';


const BuyTickets = ({addToCart}) =>{



    const generalAdmissionTicket = {
        name: 'General Admission',
        price: 55,
    };

    const GaAndMerch = {
        name: 'General Admission + Merch Perk',
        price: 70,
    };

    const EarlyEntry = {
        name: 'Early Entry Package',
        price: 80,
    };

    const GaLimitedEditionGear = {
        name: 'GA + Limited Edition Gear',
        price: 89,
    };

    const Premium = {
        name: 'Premium',
        price: 120,
    };

    const PreShowVip = {
        name: 'Pre-Show VIP',
        price: 300,
    };
return(
    <div style={{backgroundImage:`url(${surf})`}}
        className=" mx-auto bg-cover flex flex-col justify-center items-center bg-fixed bg-right">
            <div id="booga" className="flex flex-col    bg-white bg-opacity-50 w-9/12 p-5 shadow-2xl">

                <div className='mt-40 flex  p-5'>
                    <p className='text-6xl bg-red-500 w-1/2 text-center border-8 border-black danfo'>LIVE VIBES</p>
                </div>  
                

                <div className='flex bg-cyan-300 p-10'>
                    <img src="../src/assets/images/stage.jpg" alt="" />
                    <p className='text-black rubik-burned-regular mt-10 text-8xl flex justify-center text-center  m-5 '>California Kings Music Festival</p>
                </div> 
                <div className='bg-red-500 my-10 p-5 flex flex-col items-center border-8 border-black'>
                    <h1 className='text-5xl mb-4  font-semibold'>California Kings Music Festival</h1>
                    <h2 className='text-3xl mb-4 font-semibold'>The Roconvening Of California's Musical Kings </h2>
                    <h3 className='text-1xl mb-4 font-semibold'>GA Tickets, Premium Tickets, Pre-show VIP Lounge, Merch, and Limited Edition Gear</h3>
                    <p className='font-semibold'>Tickets through Live Vibes</p>
                </div>
                <div className='mb-10 flex justify-center'>
                    <img className="  border-black border-8"src="../src/assets/images/seatinggraph.jpg" alt="" />
                </div>

                <div className="grid grid-cols-2 grid-rows-8 gap-4 ">
                    <div className=' flex flex-col justify-center  text-center'>
                        <p className='rubik-burned-regular text-4xl'>Pick your Package</p>
                        <p className='text-xl'>Price includes fees (before taxes if applicable).</p>
                    </div>

                    <div className="col-span-1 row-span-2 p-20 flex flex-col items-center text-center border-8 rounded-md border-cyan-300 bg-opacity-50 bg-gray-500">
                        <h1 className='text-2xl text-white mb-10'>General Admission</h1>
                            <ul  className='text-xl text-white space-y-4'>
                                <li>Unreserved general admission (sections 5-19) </li>
                                
                                <li>Access to vendors</li>
                                

                            </ul>
                            <p className='text-2xl text-white my-5'>$55</p>
                            <button onClick={() => addToCart(generalAdmissionTicket)}
                             className="button-style p-1 bg-cyan-300 rounded-md hover:bg-cyan-400"> Add to Cart</button>
                        
                    </div>
                    
                    <div className="col-span-1 row-span-2 p-20 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300">
                        <h1 className='text-2xl text-white mb-10'>GA + Merch-Perk</h1>
                        <ul  className='text-xl text-white space-y-4'>
                            <li>Unreserved general admission (sections 5-19)</li>
                            <li>Access to vendors</li>
                            <li>Merch-Perk (20% off all merch)</li>
                            <li>Free gift bag</li>
                            <li>$10 stringer backpack (optional)</li>
                            <li>Two free stickers upon entry</li>
                        </ul>
                        <p className='text-2xl text-white my-5'>$70</p>
                        <button className="button-style p-1 bg-cyan-300 rounded-md hover:bg-cyan-400" onClick={() => addToCart(GaAndMerch)}>Add to Cart</button>

                    </div>

                    <div className="col-span-1 row-span-2  p-20 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300">
                        <h1 className='text-2xl text-white mb-10'>Early Entry Package</h1>
                        <ul  className='text-xl text-white space-y-4'>
                            <li>Entry allowed at 1PM 8/16 & 11AM 8/17</li>
                            <li>Section J-P, A green - H green seating</li>
                            <li>Access to vendors</li>
                            <li>Merch-Perk (20% off all merch)</li>
                            <li>Free gift bag</li>
                            <li>$10 stringer backpack (optional)</li>
                            <li>Two free stickers upon entry</li>
                            
                        </ul>
                        <p className='text-2xl text-white my-5'> $80</p>
                        <button className="button-style p-1 bg-cyan-300 rounded-md hover:bg-cyan-400" onClick={() => addToCart(EarlyEntry)}>Add to Cart</button>
                    </div>
                   
                    <div className="col-span-1 row-span-2  p-20 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300">
                        <h1 className='text-2xl text-white mb-10'>GA + Limited Edition Gear</h1>
                        <ul  className='text-xl text-white space-y-4'>
                            <li>Access to limited edition gear and appearal designed and autographed by the artists</li>
                            <li>Entry allowed at 1PM 8/16 & 11AM 8/17</li>
                            <li>Section A-H (green and yellow) seating</li>
                            <li>Access to vendors</li>
                            <li>Merch-Perk (20% off all merch)</li>
                            <li>Free gift bag</li>
                            <li>$10 stringer backpack (optional)</li>
                            <li>Two free stickers upon entry</li>
                            </ul>
                            <p className='text-2xl text-white my-5'>$89</p>
                            <button className="button-style p-1 bg-cyan-300 rounded-md hover:bg-cyan-400" onClick={() => addToCart(GaLimitedEditionGear)}>Add to Cart</button>

                    </div>

                    <div className="col-span-1 row-span-2 p-20 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300 ">
                        <h1 className='text-2xl text-white mb-10'>Premium</h1>
                        
                        <ul  className='text-xl text-white space-y-4'>
                            <li>Section A-H (green and yellow) seating</li>
                            <li>Access to limited edition gear and appearal designed and autographed by the artists</li>
                            <li>Entry allowed at 1PM 8/16 & 11AM 8/17</li>
                            <li>Access to vendors</li>
                            <li>Merch-Perk (20% off all merch)</li>
                            <li>Free gift bag</li>
                            <li>$10 stringer backpack (optional)</li>
                            <li>Two free stickers upon entry</li>
                        </ul>
                        
                        <p className='text-2xl text-white my-5'>$120</p>
                        <button className="button-style p-1 bg-cyan-300 rounded-md hover:bg-cyan-400" onClick={() => addToCart(Premium)}>Add to Cart</button>
                    </div>

                    <div className="col-span-1 row-span-2  p-20 flex flex-col items-center  text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300">
                        <h1 className='text-2xl text-white mb-10'>Pre-Show VIP </h1>
                        <ul className='text-xl text-white space-y-4'>
                            <li>Pre-Show meet and greet with two bands of your choice</li>
                            <li>Section A-H (green and yellow) seating</li>
                            <li>Access to limited edition gear and appearal designed and autographed by the artists</li>
                            <li>Entry allowed at 1PM 8/16 & 11AM 8/17</li>
                            <li>Access to vendors</li>
                            <li>Merch-Perk (20% off all merch)</li>
                            <li>Free gift bag</li>
                            <li>$10 stringer backpack (optional)</li>
                            <li>Two free stickers upon entry</li>
                        </ul>
                        <p className='text-2xl text-white my-5'>$300</p>
                        <button className="button-style p-1 bg-cyan-300 rounded-md hover:bg-cyan-400" onClick={() => addToCart(PreShowVip)}>Add to Cart</button>
                    </div>
                      <div className='rubik-burned-regular flex justify-center text-4xl self-center' >
                     
                        <Link to="/Cart">Go To Cart</Link>
                    </div>
                </div>
              





            </div>

    </div>
    

)
}
export default BuyTickets