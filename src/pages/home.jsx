import React from "react";
import surf from '../../src/assets/images/surf.jpg'
import '../../src/font.css'
import CampCard from "../components/campingCard";
import ShuttleCard from "../components/shuttleCard";
import FoodCard from "../components/foodCard";
import Footer from "../components/footer"
import Schedule from "../components/schedule";

const Home = () =>{
    return(
        <div style={{backgroundImage:`url(${surf})`}}
        className=" mx-auto bg-cover flex flex-col justify-center items-center bg-fixed bg-right">
            <div id="booga" className="flex flex-col    bg-white bg-opacity-50 w-9/12 p-5 shadow-2xl">
                <div className="flex flex-col  ">
                    

                        
                            <div className="flex flex-col justify-center p-12 rounded-3xl m-10 ">
                            <h1 className="text-black rubik-burned-regular mt-10 text-9xl flex justify-center text-center" >California Kings </h1>
                            <h3 className="text-black rubik-burned-regular mt-5 text-6xl flex justify-center"> Music Festival</h3>
                            <h4 className="text-black rubik-burned-regular mt-5 text-4xl flex justify-center">Venice, CA</h4>
                            </div>

                    
                

                    <div>
                        
                        <h3 className="text-black rubik-burned-regular text-5xl flex text-center justify-center">The Roconvening Of California's Musical Kings</h3>
                            
                    </div>

                        <div className="flex flex-col mt-20 items-center">
                       
                        <p className="text-4xl mt-10 rubik-burned-regular text-center">Celebrating Californias heritiage with native-born bands like</p> 
                                <div className="flex flex-col items-center mt-20">
                                    <p className="rubik-vinyl-regular text-5xl ">Red Hot Chili Peppers</p>
                                    <p className="text-black rubik-burned-regular  text-6xl">...</p>
                                    <p className="rubik-puddles-regular text-5xl mt-12">Sublime</p>
                                    <p className="text-black rubik-burned-regular  text-6xl">...</p>
                                    <p className="metal-mania-regular text-5xl mt-12">Mötley Crüe</p>
                                    <p className="text-black rubik-burned-regular  text-6xl">...</p>
                                    <p className="abril-fatface-regular text-5xl mt-12">Guns N' Roses</p>
                                </div>
                        </div>
                        
                        <div>
                            <h1 className="text-black rubik-burned-regular text-5xl flex justify-center mt-20">California Kings Music Festival</h1>
                            <h2 className="text-black rubik-burned-regular text-3xl flex justify-center mt-10">Get updates, information, locations, dates, and more</h2>
                           
                           <div className="flex flex-col items-center mt-10">
                                <a className=" text-black rubik-burned-regular p-2 text-2xl button-style bg-cyan-300 rounded-md hover:bg-cyan-400 flex
                                justify-center" href="./Contact">Resources</a>
                            </div>

                        </div>



                    
                
                </div>
                
                <div>
                    <p className="text-black rubik-burned-regular text-3xl flex justify-center mt-20">Venue Details</p>
                </div>

                <div className="flex justify-between mt-20">
                    <ShuttleCard/>
                    <CampCard/>
                    <FoodCard/>
                </div>
                <div>
                    <Schedule/>
                </div>
               
                 
            </div>
           
        </div>
        


        
      
    )
}
export default Home