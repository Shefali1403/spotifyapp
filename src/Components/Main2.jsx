import React, { useEffect,useState } from "react";
import Main2card from "./Cards/Main2card";
const Main2=()=>{
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const res=await fetch("https://v1.nocodeapi.com/amitsingh/spotify/mxOotOvJwEmNgTgU/search?q=bollywood&type=playlist");
                const result= await res.json();
                setCards(result.playlists.items);
                console.log(result.playlists.items);
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
        <div className="main2-cont bg-[#121212] w-full flex flex-col justify-start ">
            <h1 className="text-4xl p-9 text-white ml-5" >Top Picks</h1>
            <div className="main2-CARD grid grid-cols-4  grid-rows-2 gap-4 ">
                {
                    cards.map((elem)=>(
                            <Main2card key={elem.id}
                                img={elem.images[0].url}
                                link={elem.external_urls.spotify}
                            />
                    ))
                }
            </div>
        </div>

        </>
    )
};
export default Main2;