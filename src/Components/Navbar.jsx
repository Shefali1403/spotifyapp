import React from "react";
import Homepage from "../Pages/Homepage";
import Searchpage from "../Pages/Searchpage";
import { NavLink } from "react-router-dom";
import LibraryPage from "../Pages/LibraryPage";
import Playlistpage from "../Pages/Playlistpage";
const Navbar=()=>{
    return(
        <>
        <div className="navbar-cont border-2  border-black bg-black h-[333vh] flex flex-col justify-start items-start p-4 w-[23vw]">
            <div className="logo-cont flex justify-center items-center p-5 px-3 w-full">
            <i className="fa-brands fa-spotify text-white fa-2xl ml-3"></i>
                <h1 className="text-white text-3xl ml-3">Spotify</h1>
            </div>
            <div className="pages-cont mt-5 flex flex-col justify-center items-center py-3 w-full">
            <div className="home-cont flex px-6 justify-start items-center w-full p-5">
            <NavLink to="/" element={<Homepage/>}><li> <i className="fa-solid fa-house fa-lg px-3 mt-1  text-white"></i></li></NavLink>
            <p className="text-center  text-white mt-2 hover:text-pink-600"><b>Home</b></p>
            </div>
            <div className="search-cont flex px-2 justify-start items-center p-3 w-full">
            <NavLink to="/search" element={<Searchpage/>}><li>  <i className="fa-solid fa-magnifying-glass fa-lg px-3 mt-2 ml-4 text-white "></i></li></NavLink>
            <p className="text-center mt-3 text-white hover:text-pink-600"><b>Search</b></p>
            </div>
            <div className="lib-cont flex px-2 justify-start items-center w-full p-6">
            <NavLink to="/library" element={<LibraryPage/>}><li> <i className="fa-thin fa-book fa-lg ml-4 px-3  text-white"></i></li></NavLink>
            <p className="text-center  text-white ml-2 hover:text-pink-600"><b>Your Library</b></p>
            </div>
            <div className="lib-cont flex px-2 justify-start items-center w-full p-3">
            <NavLink to="/playlist" element={<Playlistpage/>}><li><i className="fa-brands fa-playstation fa-lg ml-4 mt-3 px-3 text-white"></i></li></NavLink>
            <p className="text-center mt-3 text-white hover:text-pink-600"><b>Playlist</b></p>
            </div>
            </div>
        </div>

        </>
    )
};
export default Navbar;