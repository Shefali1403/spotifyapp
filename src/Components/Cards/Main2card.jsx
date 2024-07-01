import React from "react";
const Main2card=(props)=>{
    const handleClick = () => {
        // Open the link in a new tab/window when the image is clicked
        window.open(props.link, "_blank");
      };
    return(
        <>
            <div className="main2card-cont rounded-2xl bg-[#181818] flex flex-col gap-2 justify-center items-center">
            <img src={props.img} onClick={handleClick} className="p-3 rounded-2xl" alt="not found"/>
            </div>
        </>
    )
}
export default Main2card; 