import { useState } from "react";
import Controls from "./Controls";

interface Pizze {
  data:any[];
  costo_tot: (index_value:number)=>void;
}

function Select({data,costo_tot }: Pizze) {
  const [cont, setCont] = useState(1);

  function selezionato(id:number){
    var selectDaVerificare = document.getElementById("selectBox"+id) as HTMLSelectElement;
    if(selectDaVerificare){
      var indiceSelezionato = selectDaVerificare.value;
      //console.log(indiceSelezionato);
      return rest_string(indiceSelezionato);
    }
    return "null";
  }

  function rest_string(stringa:string) {
    const parti = stringa.split('/');
    const parola = parti[0];
    return parola;
  }
  return (
    <>
      {Array(cont)
        .fill("")
        .map((_, i) => (
            <div style={{width:"320px"}} key={i}>
              <input id={"ord"+i} type="hidden" name={"ordine"+i} value={selezionato(i)}/>
          <select
            id={"selectBox"+i}
            key={i}
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            style={{ marginTop: "20px", width: "250px" }}
            onChange={()=>costo_tot(cont)}
          >
            <option value={"null/0"} selected>{(i+1)+")"} Seleziona Pizza</option>
            {data.map((item:any) => (
              <option value={item.id+"/"+item.prezzo} key={data.indexOf(item)}>
                {item.nome} - {item.prezzo}€
              </option>
            ))}
          </select>
          <Controls i={i} cont={cont} add={()=>setCont((prevCont) => prevCont + 1)} remove={()=>{
            setCont((prevCont) => prevCont - 1);
            costo_tot(cont-1);
            }}></Controls>
          </div>
        ))}
    </>
  );
}

export default Select;
