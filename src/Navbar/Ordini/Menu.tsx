import Ordini from "./Ordine_view";

interface Props {
    client:any;
    stato: string;
    ordini: any[];
    onClose: ()=>void;
    stato_ord: boolean;
}

function Offcanvas({client,ordini,onClose,stato,stato_ord}:Props){
    return(
        <div className={"offcanvas offcanvas-end " + stato} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header border-bottom border-3 border-danger">
          <h1>{client.nome+" "+client.cognome}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
        </div>
          <h1 style={{fontSize:"20px",marginLeft:"20px",marginTop:"10px"}}>Classe: {client.classe}</h1>
        <center>
        <div className="offcanvas-body" style={{fontSize:"20px",marginTop:"10px"}}>
        <h1 style={{marginLeft:"10px"}}>I tuoi ordini</h1>
        <div id="Main_scroll" className="overflow-y-scroll border border-5 border-warning rounded" style={{height:"350px",width:"330px",overflow:"auto",marginTop:"40px"}}>
        <Ordini client_id={client.id} data={ordini}></Ordini>
        </div>
        </div>
        </center>
        <div style={{marginTop:"15px"}}>
        {
            stato_ord === true && 
            <button type="button" className="d-inline btn btn-warning" style={{marginLeft:"40px",marginBottom:"17px"}}><a href={`/ordine?id=${client.id}&stato=false`} style={{textDecoration:"none",color:"black"}}>Ordini Classe</a></button>
        }
        {
            stato_ord === false && 
            <button type="button" className="d-inline btn btn-warning" style={{marginLeft:"40px",marginBottom:"17px"}}><a href={`/ordine?id=${client.id}&stato=true`} style={{textDecoration:"none",color:"black"}}>Fai il tuo Ordine</a></button>
        }
        <button type="button" className="d-inline btn btn-danger" style={{float:"right", marginRight:"40px",marginBottom:"17px"}}><a href={"/"} style={{textDecoration:"none",color:"black"}}>Esci</a></button>
        </div>
        </div>
    );
}

export default Offcanvas;