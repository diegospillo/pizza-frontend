import Pizze from "./Pizze_view";

interface Props {
    client: any;
    pizze: any[];
    stato: string;
    onClose: () => void;
}

function Offcanvas({ client, pizze, onClose, stato }: Props) {
    return (
        <div className={"offcanvas offcanvas-end " + stato} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom border-3 border-danger">
                <h1>{client.nome + " " + client.cognome}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
            </div>
            <center>
                <div className="offcanvas-body" style={{ fontSize: "20px", marginTop: "10px" }}>
                    <h1 style={{ marginLeft: "10px" }}>Gestione Pizze</h1>
                    <div id="Main_scroll" className="overflow-y-scroll border border-5 border-warning rounded" style={{ height: "350px", width: "330px", overflow: "auto", marginTop: "40px" }}>
                        <Pizze client_id={client.id} data={pizze}></Pizze>
                    </div>
                </div>
            </center>
            <div style={{ marginTop: "15px" }}>
                <button onClick={()=>Insert_Pizza(client.id)} type="button" className="d-inline btn btn-warning" style={{ marginLeft: "40px", marginBottom: "17px", color: "black" }}>Aggiungi Pizza</button>
                <button type="button" className="d-inline btn btn-danger" style={{ float: "right", marginRight: "40px", marginBottom: "17px" }}><a href={"/"} style={{ textDecoration: "none", color: "black" }}>Esci</a></button>
            </div>
        </div>
    );
}

function Insert_Pizza(id:string) {
    var nome = prompt("Nome:");
    if (nome == null || nome == "") {
        alert("Inserisci nome");
    } else {
        var prezzo = prompt("Prezzo:");
        if (prezzo == null || prezzo == "") {
            alert("Inserisci prezzo");
        } else {
            Add_Pizza(id,nome, prezzo);
        }
    }
}

function Add_Pizza(id:string ,nome: string, prezzo: string) {
    location.href = `https://pizzappbackend.onrender.com/insert_Pizze?id=${id}&nome=${nome}&prezzo=${prezzo}`; 
}

export default Offcanvas;