import surf from '../assets/images/surf.jpg'
import Schedule from '../components/schedule'
import ParkNav from '../components/parkNav'
const SchedulePage = () => {
return(
    <div style={{backgroundImage:`url(${surf})`}}
        className=" mx-auto bg-cover flex flex-col justify-center items-center bg-fixed bg-right">
            <div id="booga" className="flex flex-col    bg-white bg-opacity-50 w-9/12 p-5 shadow-2xl">
                <div>
                    <div className='flex flex-col mt-40 items-center'>
                       
                        <h1 className='flex m-10 rubik-burned-regular text-6xl'>Summer 2024</h1>
                        
                        <h1 className='flex m-10 rubik-burned-regular text-6xl'>Long Live the California Kings </h1>
                    
                      

                        <p className='m-10 rubik-burned-regular text-6xl'>Tickets on Sale Now!</p>
                    </div>
                    <p className='flex justify-center text-2xl'>Live performances begin at 8/16 at 3PM and end 11PM 8/17</p>
                    <p className='flex justify-center text-2xl' >Pre-order tickets while supplies last </p>
                    
                    <Schedule/>
                    <div>
                        <h1 className='flex justify-center m-20 rubik-burned-regular text-6xl'>HeadLiners</h1>
                        <h3  className='flex justify-center m-20 rubik-burned-regular text-3xl'>Playing 8/16 - 8/17 Main Stage 6:30 - 11</h3>
                        
                        <div className=''>
                            <div className='w-4/0% m-24 float-left relative'>
                                <p className='flex justify-center m-10 rubik-burned-regular text-3xl'>Main Stage,  9PM 8/16 - 8/17</p>
                            
                                    <div className="absolute bg-white  p-4 rounded-lg shadow-lg" style={{ top: '80%', left:'20%', marginRight: '-250px' }}>
                                        <h2 className="text-xl font-bold mb-2">Red Hot Chili Peppers</h2>
                                        <p className="text-sm">The Red Hot Chili Peppers stand out as one of California's top bands due to their 
                                        unique fusion of rock, funk, and punk, creating an iconic sound that's both energetic and introspective.
                                         Their enduring success, innovative musical style, and powerful performances have solidified their place as
                                          influential icons in the music world,
                                         making them a standout among the best bands from California.</p>

                                    </div>
                                    <img src="../src/assets/images/keidis.jpg" alt="" className="w-full h-auto" />
                            

                            </div>
                            <div className='w-40% m-24 float-right relative'>
                            <p className='flex justify-center m-10 rubik-burned-regular text-3xl'>Main Stage,  7:30PM 8/16 - 8/17</p>
                                    <div className="absolute bg-white p-4 rounded-lg shadow-lg" style={{ top: '80%', right:'20%', marginLeft: '-250px' }}>
                                        <h2 className="text-xl font-bold mb-2">Motley Crue</h2>
                                        <p className="text-sm">
                                            Motley Crue, a California-based rock band,
                                            rose to fame in the 1980s with their unique blend of glam metal and 
                                            hard rock, capturing the essence of the 
                                            Sunset Strip era. Their rebellious spirit and
                                            electrifying performances made them cultural icons, known for
                                            hits like "Girls, Girls, Girls" and "Kickstart My Heart." Despite 
                                            challenges, they endured as legends, inspiring generations of fans and 
                                            musicians with their raw energy and unapologetic attitude. Motley Crue's impact
                                            on the rock and metal scenes remains undeniable, solidifying their place
                                            in music history as one of California's most iconic bands.</p>
                                    </div>
                                    <img src="../src/assets/images/Motley_feature.jpg" alt="" className="w-full h-auto" />
                            

                            </div>
                            <div className='w-40% m-24 float-left relative'>
                            <p className='flex justify-center m-10 rubik-burned-regular text-3xl'>Main Stage,  6:30PM 8/16 - 8/17</p>
                            
                                    <div className="absolute bg-white  p-4 rounded-lg shadow-lg" style={{ top: '80%', left:'20%', marginRight: '-250px'  }}>
                                        <h2 className="text-xl font-bold mb-2">Guns N' Roses</h2>
                                        <p className="text-sm">
                                                                                    
                                            Guns N' Roses, hailing from Los Angeles, California, made a profound impact 
                                            on rock music in the late 1980s with their intense blend of hard rock,
                                            punk, and blues. Led by Axl Rose and Slash, they achieved massive 
                                            success with iconic hits like "Sweet Child o' Mine" and "Welcome to the 
                                            Jungle." Despite internal conflicts, their debut album "Appetite for Destruction" 
                                            remains one of the best-selling albums of all time. Guns N' Roses' enduring legacy is
                                            marked by their ability to captivate audiences globally with electrifying live performances
                                            and timeless rock anthems, solidifying their status as legends in the rock genre and 
                                            representing California's vibrant music scene.</p>
                                    </div>
                                    <img src="../src/assets/images/roses_feature.jpg" alt="" className="w-full h-auto" />
                            

                            </div>
                        </div>
                    </div>
                     
                </div>
                <ParkNav/>
                  
                    
            </div>
    </div>
)
}
export default SchedulePage