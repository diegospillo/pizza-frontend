import { useState } from "react";
import Offcanvas from "./Ordini/Menu";
import Gest_pizze from "./Pizze/Menu";

interface Dati_client{
  client:any[];
  ordini:any[];
  pizze:any[];
  stato_ord:boolean;
  gestione:boolean;
}

function getStato(sta:boolean){
if(sta) return "show";
return "";
}

function Navbar({client,ordini,pizze, stato_ord,gestione}:Dati_client){
  const [offCanvasVisible, setoffCanvasVisibility] = useState(false);
    return(
        <nav className="navbar bg-warning" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://www.midossi.edu.it/images/loghi-midossi/logo-midossi-150-150.png" width="55px"/>
            <span className="navbar-brand mb-0 h1 align-text-top" style={{fontSize:"30px",color:"black"}}> PizzApp</span>
          </a>
          <button className="navbar-toggler" onClick={()=>setoffCanvasVisibility(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {
     gestione==true &&
    <Offcanvas stato={getStato(offCanvasVisible)} client={client} ordini={ordini} stato_ord={stato_ord} onClose={()=> setoffCanvasVisibility(false)}></Offcanvas>
    } 
    {
     gestione==false &&
     <Gest_pizze stato={getStato(offCanvasVisible)} client={client} pizze={pizze} onClose={()=> setoffCanvasVisibility(false)}></Gest_pizze>
    }   
    </div>
      </nav>
    );
}

export default Navbar;