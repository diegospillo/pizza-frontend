import { useState } from "react";
import Pizza_select from "./Pizza_select";


interface Pizze {
    data:any[];
};


function List({data}:Pizze){
    const [costoTot, setCostoTot] = useState(0);
    return(
        <>
        <form action="http://127.0.0.1:8000/check_ordine/" method="get">
        <div style={{marginTop:"20px"}}>
        <center>
        <h1 style={{marginLeft:"10px"}}>Fai il tuo ordine</h1>
        <div id="Main_scroll" className="overflow-y-scroll border border-5 border-warning rounded" style={{height:"350px",width:"fit-content",overflow:"auto",backgroundColor:""}}>
        <Pizza_select  data={data} costo_tot={(index_value:number)=>setCostoTot(Get_costo_tot(index_value))} ></Pizza_select>
        </div>
        </center>
        </div>
        <div style={{marginTop:""}}>
        <h1 style={{marginLeft:"10px",marginTop:"20px"}}>Costo Totale: {costoTot}€</h1>
        <center>
            <input className="btn btn-danger btn-lg" type="button" value="Invia" style={{marginTop:"35px"}}  onClick={check_invio}></input>
        </center>
        <input id="btn_submit" type="submit" value="" style={{display:"none"}}/>
        </div>
        </form>
        </>
    );
}

function check_invio() {
    let stato = true;
    let cont=0;
    while(true){
    var input_ck = document.getElementById("ord"+cont) as HTMLSelectElement;
    if(input_ck){
      var val = input_ck.value;
      if(val=="null"){
        stato=false;
        break;
      }
      cont++;
    }
    else break;
}
    if (stato) {
      var btn = document.getElementById("btn_submit") as HTMLSelectElement;
      btn.click();
    } else {
      alert("Seleziona la pizza");
    }
  }


function Get_costo_tot(index_value:number){
    var tot=0;
    for(let i=0;i<index_value;i++){
    var selectBox = document.getElementById("selectBox"+i) as HTMLSelectElement;
    tot+=parseFloat(rest_string(selectBox.options[selectBox.selectedIndex].value));
    }
    return tot;
}

function rest_string(stringa:string) {
    const parti = stringa.split('/');
    const parola = parti[1];
    return parola;
  }

export default List;