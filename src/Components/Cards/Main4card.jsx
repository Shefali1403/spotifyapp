import React from "react";
const Main4card=(props)=>{
  const eventhandle=()=>{
    window.open(props.link, "_blank")
  }
  const cardStyle = {
backgroundImage: `url(${props.imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: '300px', 
    height: '300px',  
    color: 'black', 
    position: 'relative', 
    zIndex: 1, 
  };
  return(
    <>
      <div className="main4card-cont border-2 rounded-lg border-black bg-[#303030] h-[45vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white  " onClick={eventhandle}><b>{props.name}</b></h1>
      </div>
    </>
  )
};
export default Main4card;