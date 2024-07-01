import React from "react";
import Main6card from "./Cards/Main6card";
import { useState, useEffect } from "react";
const Main6=()=>{
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const res=await fetch("https://v1.nocodeapi.com/amitsingh/spotify/mxOotOvJwEmNgTgU/myPlaylists");
                const result= await res.json();
               setCards(result.items); 
                console.log(result.items);
              return result;
            }
            catch(error){
console.log("error not found");
            }
        }
        fetchData();
    },[])
    return(
        <>
             <div className="main6-cont flex flex-col w-full bg-gradient-to-b from-custom-grey to-custom-black">
        <h1 className="text-4xl p-8 text-white">My Playlist</h1>
        <div className="main6-CARD grid grid-cols-4  grid-rows-2 gap-4 ">
                {
                    cards.map((elem)=>(
                            <Main6card key={elem.id}
                                  img={elem.images?.[0]?.url || ''}
                                link={elem.external_urls.spotify}
                            />
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Main6;