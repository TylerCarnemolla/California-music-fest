import { useEffect, useState } from "react";
import axios from "axios";
import { imageListClasses } from "@mui/material";

const Listen = () => {
    const CLIENT_ID = "0db2d6bcd33948c597c35b6f25d90cfc";
    const REDIRECT_URI = "http://localhost:5173/Lineup";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtist] = useState([])
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            const token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1];
            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setToken(token);
        } else if (token) {
            setToken(token);
        }
    }, []);

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    const searchArtists = async (e) => {
        e.preventDefault();

        setArtist([])
        setSearchKey("")
        setErrorMessage("")
        try {
            const { data } = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchKey,
                    type: "artist"
                }
            });

            if (data.artists.items.length > 0) {
                setArtist(data.artists.items);
            } else {
                setErrorMessage("No artists found. Please try another search.");
            }
        } catch (error) {
            setErrorMessage("An error occurred while searching. Please try again.");
        }
    };


    const renderArtists = () => {
        if (artists.length > 0) {
            const artist = artists[0];  
            return (
                <div key={artist.id} className="p-10 bg-cyan-300 rounded-lg ">
                    {artist.images.length ? (
                        <img width={"100%"} src={artist.images[0].url} alt="Artist photo" className="rounded-lg shadow-xl" />
                    ) : (
                        <div>No Images</div>
                    )}
                    <div className="flex flex-col items-center">
                        <div className="text-4xl m-5">
                            {artist.name}
                        </div>
                        <a href={artist.external_urls.spotify} target="_blank"
                        rel="noopener noreferrer" className="underline">Go to {artist.name} on Spotify</a>
                    </div>
                </div>
            );
        } 
        
    }
    return (
        <div className="">

            <div className="flex flex-col text-center">
                <p className="m-10 rubik-burned-regular text-3xl">What to Listen to any of these musical Artists? </p>
               
            </div>

            
            

            
            
            
           

            {token ? (
                            
                            <div className="flex flex-col justify-center items-center m-10">
                            <form onSubmit={searchArtists} className="flex flex-col items-center">
                                <input
                                    type="text"
                                    value={searchKey}
                                    onChange={(e) => setSearchKey(e.target.value)}
                                    placeholder="Search a band's title"
                                    className="border-2 border-black w-80 p-2 mb-5"  // Adjust width, padding, and margin for spacing
                                />
                                <button
                                    className="bg-green-500 rounded-md p-2 text-white text-lg font-seri w-40"  // Adjust button width
                                    type="submit"
                                >
                                    Search Spotify
                                </button>
                            </form>
                        </div>
                        ) : (
                            
                            <p className="m-5  text-2xl flex justify-center">Login to Spotify to search each bands page</p>
                            
                            
                        )}

           {renderArtists()} 
           
           {!token ? (
                <>
                    {console.log("You don't have a token")}
                    <div className="flex justify-center">
                    <a
                        className="bg-green-500 rounded-md p-3 text-white text-lg font-serif"
                        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                    >
                        Login To Spotify
                    </a>
                    </div>
                </>
            ) : (
                <>
                    {console.log("You have a token")}
                    <div className="flex justify-center m-10">
                    <button className="bg-green-500 rounded-md mt-5 p-2 text-white text-lg  font-seri w-1/4" onClick={logout}>Logout</button>
                    </div>
                </>
            )} 

        </div>
    );
};

export default Listen;