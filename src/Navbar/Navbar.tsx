import { useState } from "react";
import Offcanvas from "./Offcanvas";

function getStato(sta:boolean){
if(sta) return "show";
return "";
}

function Navbar(){
  const [offCanvasVisible, setoffCanvasVisibility] = useState(false);
    return(
        <nav className="navbar bg-warning" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/178/999/small/cartoon-small-pizza-file-free-png.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top"/>
            <span className="navbar-brand mb-0 h1 align-text-top" style={{fontSize:"30px"}}>Pizza</span>
          </a>
          <button className="navbar-toggler" onClick={()=>setoffCanvasVisibility(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Offcanvas stato={getStato(offCanvasVisible)} onClose={()=> setoffCanvasVisibility(false)}></Offcanvas>
    </div>
      </nav>
    );
}

export default Navbar;