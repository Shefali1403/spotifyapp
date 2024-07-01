import React from "react";
const Main5Card=(props)=>{
    const handleClick = () => {
        // Open the link in a new tab/window when the image is clicked
        window.open(props.link, "_blank");
      };
    return(
        <>
     <div className="main5card-cont rounded-2xl flex flex-col gap-2 justify-center items-center">
            <img src={props.img} onClick={handleClick} className="p-3 rounded-2xl" alt="not found"/>
            </div>
        </>
    )
}
export default Main5Card;