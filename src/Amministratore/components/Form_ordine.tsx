import Ordine_select from "./Ordine_select";


interface Ordine {
    data: any[];
};


function List({data}: Ordine) {
    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <center>
                    <h1 style={{ marginLeft: "10px" }}>Ordine Classe</h1>
                    <div id="Main_scroll" className="overflow-y-scroll border border-5 border-warning rounded" style={{ height: "350px", width: "fit-content", overflow: "auto", backgroundColor: "" }}>
                        <Ordine_select data={data}></Ordine_select>
                    </div>
                </center>
            </div>
            <div style={{ marginTop: "" }}>
                <h1 style={{ marginLeft: "10px", marginTop: "80px" }}>Costo Totale: {Get_costo_tot(data)}€</h1>
            </div>
        </>
    );
}

function Get_costo_tot(data: any[]) {
    let somma = 0;

    for (let i = 0; i < data.length; i++) {
        somma += data[i].prezzo;
    }
    return somma;
}

export default List;