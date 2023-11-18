
interface Ordine {
  data: any[];
}

function Select({data}: Ordine) {
  if(data.length>0){
  const pizze = data.map((item:any)=>{
    return item.pizza + " - " + item.prezzo + "€"
  })
  console.log("PIZZA1:");
  console.log(pizze);
  var control_nome = new Array();
  return (
    <>   
        {data.map((item:any) => {
          if(control_nome.includes(item.nome)){ return null;}
          else{
            control_nome.push(item.nome);
           return(
          <div style={{width:"320px"}} key={data.indexOf(item)}>
          <select
            key={data.indexOf(item)}
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            style={{ marginTop: "20px", width: "250px" }}
          >
            <option selected>{item.nome + " - " + get_prezzo(data.indexOf(item),data) + "€"}</option>
            {set_pizze(data.indexOf(item),pizze,data).map((item1) => (
              <option value={item1} key={pizze.indexOf(item1)} disabled>
                {item1}
              </option>
            ))}
          </select>
          </div>
          );
            }
          })}
    </>
  );
  }
  else{
    return(
      <p style={{marginTop:"130px"}}>Non ci sono ordini</p>
    );
  }
}


function set_pizze(val:number,pizza:string[],data:any[]){
  var pizze = [];
  for(let x=0;x<data.length;x++){
    if(data[val].nome==data[x].nome){
      pizze.push(pizza[x]);
    }
  }
  console.log("PIZZA2:");
  console.log(pizze);
  return pizze;
}

function get_prezzo(val:number,data:any[]){
  var somma = 0;
  for(let x=0;x<data.length;x++){
    if(data[val].nome==data[x].nome){
      somma+=parseFloat(data[x].prezzo);
    }
  }
  return somma;
}

export default Select;
