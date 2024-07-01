import React, { useEffect, useState } from "react";
import Main5Card from "./Cards/Main5Card";
const Main5=()=>{
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const res=await fetch("https://v1.nocodeapi.com/amitsingh/spotify/mxOotOvJwEmNgTgU/myPlaylists?page=Satranga");
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
        <div className="main5-cont flex flex-col w-full bg-gradient-to-b from-custom-grey to-custom-black">
        <h1 className="text-4xl p-8 text-white">Library</h1>
        <div className="main5-CARD grid grid-cols-4  grid-rows-2 gap-4 ">
                {
                    cards.map((elem)=>(
                            <Main5Card key={elem.id}
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
export default Main5;