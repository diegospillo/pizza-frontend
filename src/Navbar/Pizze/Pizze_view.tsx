import {Trash3} from 'react-bootstrap-icons';

interface Pizze {
  client_id: any;
  data: any[];
}

function Select({client_id,data}: Pizze) {
 if(data.length>0){
  return (
    <>   
      <div className="list-group">
    {
    data.map((item:any) => {
      return(
  <li style={{marginTop:"3px"}} className="list-group-item" key={data.indexOf(item)}>
    <p className='d-inline'>{item.nome + " - " + item.prezzo + "€"}</p>
    <Trash3 className='d-inline' onClick={()=>cancella(client_id,item.id)} style={{float:'right',marginTop:'5px',color:"red"}}></Trash3>
  </li>
  );
})
}
</div>
    </>
  );
}
else{
  return(
    <p style={{marginTop:"130px"}}>Non ci sono pizze</p>
  );
}
}

function cancella(id_client:string,id:string) {
  var domanda = confirm("Conferma per eliminare la pizza");
  if (domanda === true) {
    location.href = `https://pizzappbackend.onrender.com/drop_Pizze?id_client=${id_client}&id=${id}`;  
  }else{
    alert('Operazione annullata');
  }
}

export default Select;
