import { HtmlHTMLAttributes } from "react";
import Ordine_select from "./Ordine_select";


interface Ordine {
    client: string;
    data: any[];
};


function List({ data,client }: Ordine) {
    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <center>
                    <h1 style={{ marginLeft: "10px" }}>Ordini Classi</h1>
                    <form action="" method="get">
                        <div className="form-group" style={{marginTop:"15px"}}>
                            <input type="hidden" name="id" value={client}/>
                            <input type="date" id="dateStandard" name="data"/>
                            <button type="button" className="btn btn-danger" style={{fontSize:"11.5px",marginTop:"-6px",marginLeft:"5px"}} onClick={check_invio}>Mostra</button>
                        </div>
                        <input id="btn_submit" type="submit" style={{display:"none"}}/>
                    </form>
                    <div id="Main_scroll" className="overflow-y-scroll border border-5 border-warning rounded" style={{ height: "350px", width: "330px", overflow: "auto", backgroundColor: "",marginTop:"20px"}}>
                        <Ordine_select data={data}></Ordine_select>
                    </div>
                </center>
            </div>
            <div style={{ marginTop: "-40px" }}>
                <h1 style={{ marginLeft: "10px", marginTop: "80px" }}>Costo Totale: {Get_costo_tot(data)}€</h1>
            </div>
        </>
    );
}

function Get_costo_tot(data: any[]) {
    let somma = 0;

    for (let i = 0; i < data.length; i++) {
        somma += parseFloat(data[i].prezzo);
    }
    return somma;
}

function check_invio() {
    let stato = false;

    var input_ck = document.getElementById("dateStandard") as HTMLDataElement;
    if(input_ck){
      var val = input_ck.value;
      if(val){
        stato=true;
      }
    }

    if (stato) {
      var btn = document.getElementById("btn_submit") as HTMLSelectElement;
      btn.click();
    } else {
      alert("Seleziona la data");
    }
  }

export default List;