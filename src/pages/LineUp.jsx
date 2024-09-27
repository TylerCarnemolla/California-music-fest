import surf from "../assets/images/surf.jpg"
import { useEffect, useState } from "react"
import SystemCard from '../components/systemDown'
import DeftonesCard from '../components/deftonesCard'
import BlinkCard from "../components/BlinkCard"
import GunsCard from '../components/gunsRosesCard'
import MotleyCard from '../components/motleyCard'
import PeppersCard from "../components/peppersCard"
import SublimeCard from '../components/sublimeCard'
import StupidCard from "../components/stupidCard"
import SpotifyWebApi from  "spotify-web-api-js"
import axios from "axios"
import Listen from "../components/listen"



const LineUp = () => {

 
 
    
    // const [spotifyApi, setSpotifyApi] = useState(null)
    // const [accessToken, setAccessToken] =useState("")

    const [searchKey, setSearchKey] = useState("")

//     useEffect(() =>{
//     const _getToken = async () => {
//         try {
//         const result = await fetch(
//             "https://accounts.spotify.com/api/token",{
//             method:"POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 "Authorization": "Basic " + btoa(client_ID + ":" + Client_Secret)
//             },
//             body:"grant_type=client_credentials"
//     });
//     const data = await result.json();
//     setAccessToken(data.access_token) ;
//     const spotifyApiInstance = new SpotifyWebApi();
//     setSpotifyApi(spotifyApiInstance)

//     } catch (error){
//         console.log("error fetching token")
//     }};
    
//     _getToken();
// },[]);

// const searchArtists = (e) =>{
//     const {data} = await axios.get("https://api.spotify.com/v1/search",

// )
// }
 






 

return(
    
    <div style={{backgroundImage:`url(${surf})`}}
        className=" mx-auto bg-cover flex flex-col justify-center  items-center bg-fixed bg-right">
            <div className="flex flex-col   bg-white bg-opacity-50 w-9/12 p-5 shadow-2xl">
              
               
                <div className="flex justify-center mt-28">
                    <div className="flex flex-col items-center">   

                        <div className="flex flex-col items-center">
                        <p className="text-black rubik-burned-regular text-6xl text-center mt-20">Meet the Lineup of California Made Musical Giants</p>
                        <a className="bg-green-500 rounded-md mt-20 p-3 text-white text-lg  font-serif" href="../src/components/spotify">Scroll Down to Listen on Spotify</a>
                        
                        </div>

                    
                     
                        <div className="flex mt-20 ">

                            <div className="m-5"><PeppersCard/>
                            {/* <form onSubmit={searchArtists}>
                                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                                <button type="submit">Search RHCP songs</button>
                            </form> */}
                            </div>

                            <div className="m-5"><GunsCard/>
                           
                            </div>
                                                        
                        </div>
                        <div className="flex mt-20">

                            <div className="m-5"><MotleyCard/>
                           
                            </div>

                            <div className="m-5"><SublimeCard/>
                            
                            </div>

                        </div>
                        <div className="flex mt-20">

                            <div className="m-5"><SystemCard/>
                            
                            </div>

                            <div className="m-5"><BlinkCard/>
                           
                            </div>

                        </div>
                        <div className="flex mt-20">

                            <div className="m-5"><DeftonesCard/>
                           
                            </div>

                            <div className="m-5"><StupidCard/>
                           
                            </div>

                        </div>
                        <Listen/>


           


                        
                    </div>
                </div>







            </div>
    </div>
)}

export default LineUp