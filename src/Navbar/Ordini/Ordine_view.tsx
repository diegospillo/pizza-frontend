import {Trash3} from 'react-bootstrap-icons';

interface Ordine {
  client_id: any;
  data: any[];
}

function Select({client_id,data}: Ordine) {
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
    <p style={{marginTop:"130px"}}>Non ci sono ordini</p>
  );
}
}

function cancella(id_client:string,id_ord:string) {
  var domanda = confirm("Conferma per eliminare il seguente ordine");
  if (domanda === true) {
    location.href = `https://pizzappbackend.onrender.com/drop_Ordine?id_client=${id_client}&id_ordine=${id_ord}`;  
  }else{
    alert('Operazione annullata');
  }
}

export default Select;
