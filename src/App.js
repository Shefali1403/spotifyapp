import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Searchpage from "./Pages/Searchpage";
import { Routes, Route } from "react-router-dom";
import LibraryPage from "./Pages/LibraryPage";
import Playlistpage from "./Pages/Playlistpage";
const App=()=>{
  return(
    <>
    <div className="container">
    <Navbar/>
<div className="main-container flex flex-col w-full">
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/search" element={<Searchpage/>} />
  <Route path="/library" element={<LibraryPage/>}/>
  <Route path="/playlist" element={<Playlistpage/>}/>
</Routes>

</div>

    </div>

    </>
  )
};
export default App;
