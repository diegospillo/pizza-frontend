import { useState } from "react";
import Offcanvas from "./Menù";

interface Dati_client{
  client:any[];
  ordini:any[];
  stato_ord:boolean;
}

function getStato(sta:boolean){
if(sta) return "show";
return "";
}

function Navbar({client,ordini,stato_ord}:Dati_client){
  const [offCanvasVisible, setoffCanvasVisibility] = useState(false);
    return(
        <nav className="navbar bg-warning" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://www.midossi.edu.it/images/loghi-midossi/logo-midossi-150-150.png" width="55px"/>
            <span className="navbar-brand mb-0 h1 align-text-top" style={{fontSize:"30px"}}> PizzApp</span>
          </a>
          <button className="navbar-toggler" onClick={()=>setoffCanvasVisibility(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Offcanvas stato={getStato(offCanvasVisible)} client={client} ordini={ordini} stato_ord={stato_ord} onClose={()=> setoffCanvasVisibility(false)}></Offcanvas>
    </div>
      </nav>
    );
}

export default Navbar;