import React, { useEffect, useState } from "react";
import Main4card from '../Components/Cards/Main4card'
const Main4=()=>{
    const[cards, setCards]=useState([]);
    useEffect(()=>{
      const dataFetch=async()=>{
        try{
            const res=await fetch("https://v1.nocodeapi.com/amitsingh/spotify/mxOotOvJwEmNgTgU/browse/new?country=Ind");
            const result=await res.json();
            console.log(result.albums.items);
            const data=result.albums.items[0].artists;
            setCards(data);
        }
        catch(error){
            console.log("error not found");
        }
      }
      dataFetch();
    },[])
    return(
        <>
            <div className="main4-cont w-full bg-black  grid grid-cols-3 gap-3">
            {cards.map((elem)=>(
                <Main4card key={elem.id}
                    name={elem.name}
                    link={elem.external_urls.spotify}
                />
            ))}
          </div>
        </>
    )
}
export default Main4;