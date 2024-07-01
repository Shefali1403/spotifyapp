import React from "react";
const Main3=()=>{
    return(
        <>
       <div className="main3-cont bg-[#0E0E0E] p-5 flex flex-col justify-start w-full">
        <form>
            <input type="text" placeholder="Search Artists, Songs, Podcasts" className="p-2 px-7 rounded-lg"/>
            <button className="ml-4 border-2 border-white text-[#767676] px-3 py-1 rounded-lg hover:border-pink-600 hover:text-pink-600">Search</button>
        </form>
         <h1 className="text-4xl p-8 text-white">Your top genres</h1>
       
        <div className="main3-cards grid grid-cols-3 gap-4 w-full">
            <div className="card1 relative flex justify-start items-start rounded-lg  "><img src="/images/pop.jpeg" alt="not found" className="w-full rounded-lg "/></div>
            <div className="card2 relative flex justify-start items-start rounded-lg "><img src="/images/hiphop.jpeg" alt="not found" className="w-full rounded-lg"/></div>
            <div className="card3 relative flex justify-start items-start rounded-lg"><img src="/images/indie.jpeg" alt="not found" className="w-full rounded-lg"/></div>
        </div>

       </div>
        </>
    )
}
export default Main3;