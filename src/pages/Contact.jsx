import surf from '../assets/images/surf.jpg'
import ParkNav from '../components/parkNav'
const Contact = () =>{
return(
    <div style={{backgroundImage:`url(${surf})`}}
        className=" mx-auto bg-cover flex flex-col  justify-center items-center bg-fixed bg-right">
            <div id="booga" className="flex flex-col    bg-white bg-opacity-50 w-9/12 p-5  shadow-2xl">
                
                <div className='flex flex-col text-center mt-40'>
                    <h1 className='rubik-burned-regular text-center text-6xl'>Contact </h1>
                    <h1 className=' rubik-burned-regular text-center text-6xl'>and</h1>
                    <h1 className=' rubik-burned-regular text-center text-6xl'>Resources</h1>
                </div>
                    
                <div className='m-10 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300 p-5'>
                    <h2 className='text-4xl'>Ticket Sales</h2>
                    <p className='mt-4'>For questions or issues with ticket sales, please email livevibes@vibes.com.</p>
                    <p className='mt-4'>When emailing, please include your first and last name, address (including zip code), 
                        telephone number and order number (if available).</p>
                    <p className='mt-4'>Tickets refundable for up to 20 business days after purchase.</p>
                    <p className='mt-4'>Insurance for tickets is available.</p>
                </div>

                <div className='m-10 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300 p-5'>
                    <h2 className='text-4xl '>Venue</h2>
                    
                    <p className='mt-4 text-2xl'> Venice Beach Skate Park</p>
                    <p className='flex justify-center m-2  text-center'>California Kings Festival is located on the shore past the skatepark at the end of Horizon Ave and Market Street.</p>
                    <p className='flex justify-center m-2  text-center'>Ticket booths and entrances are spaced evenly on the board walk between Brooks Ave and Virgina Ct.</p>
                    <p className='flex justify-center m-2  text-center'>We encourage using our shuttle service, public transport, walking, or bycicle</p>
                    <h2 className='text-2xl mt-5'>Contact</h2>
                    <p className='mt-4'>For support with questions regarding the venue, please call or email our support team:</p>
                
                        <p className='mt-4'>1(555)-555-5555</p> 
                        <p className='mt-4'>Support@CKMF.com</p>
                    
                
              
                    
                </div>
                <div className='m-10 flex flex-col items-center text-center border-8 rounded-md bg-opacity-50 bg-gray-500 border-cyan-300 p-5'>
                    <h2 className='text-4xl '>Resources</h2>
                        <h2 className='text-2xl mt-5'>Shuttle</h2>
                    <p>A shuttle service will be available free of charge to ticket holding attendees. 
                    Please visit <span className='underline text-blue-700'>"www.VeniceBeachBus.com"</span> for pickup locations and times.</p>
                    
                    <h2 className='text-2xl mt-5'>Camping</h2>
                    <p> Campgrounds will be available for a fee payed to Los Angeles County. Campgrounds 
                        will be marked on event maps downloadable from Los Angeles County Website. Visit  
                        <span className='underline text-blue-700'> www.VisitVenice.com/kings</span> for a Hotel directory.</p>
                    <h2 className='text-2xl mt-5'>Food & Beverage</h2>
                        <p>The venue will be outfitted with beer gardens and an assortment of food trucks
                        and vendors. Favorites include Beach Cruiser Brewing, Pedros Tacos, Bum-Bum Burgers, and Sunburnt Seltzer.</p>

                </div>
               
                
                  
                  
                  
                </div>
          </div>
                

)         
    
}
export default Contact