import React from "react";
import Main1card from "./Main1Cards/Main1card";
import cdata from "./Main1Cards/Main1cdata";
const Main1=()=>{
    return(
        <>
        <div className="main1-cont p-4 bg-gradient-to-b from-custom-grey to-custom-black w-full flex flex-col justify-start ">
            <h1 className="text-4xl p-9 text-white">Good morning</h1>
            <div className="main1-cards grid grid-cols-4 grid-rows-2 gap-3  ">
                {cdata.map((elem)=>{
                    return(
                        <Main1card key={elem.id}
                              img={elem.img}
                            title={elem.title}
                        />
                    )
                })}
            </div>
        </div>

        </>
    )
};
export default Main1;