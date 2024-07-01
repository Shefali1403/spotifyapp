import React from "react";
const Main1card=(props)=>{
    return(
        <>
            <div className="main1-card flex justify-start items-center bg-[#303030]  ">
                <img src={props.img} className="w-[83px]" alt="not found"/>
                <p className="ml-3 text-white">{props.title}</p>
            </div>
        </>
    )
};
export default Main1card;