import Navbar from "../Navbar/Navbar";
import Ordini_classe from "../Gestione_ordine_classe/App";
import New_lista_pizze from "./components/Form_ordine";
import {useState, useEffect} from "react";
import axios from "axios";

function App(){
  const [Stato_ordine, setStato_ordine] = useState(true);
  const [Lista_pizze, setLista_pizze] = useState([]);
  const [Ordini, setOrdini] = useState([]);
  const [client, setClient] = useState([]);
  const [IDParam, setIDParam] = useState("null");

  const fetchData = async ()=>{
    const idParam = new URLSearchParams(location.search).get("id");
    const stato = new URLSearchParams(location.search).get("stato");
    const client_res = (await axios.get('https://pizzappbackend.onrender.com/get_Studente?id='+idParam)).data;

    if(client_res.lenght==0){
      //Null
    }
    else{
    const lista_pizze_res = (await axios.get('https://pizzappbackend.onrender.com/get_Pizze')).data;
    const ordini_res = (await axios.get('https://pizzappbackend.onrender.com/get_Ordini_Studente?id='+idParam)).data;
    setLista_pizze(lista_pizze_res);
    setOrdini(ordini_res);
    setClient(client_res[0]);
    if(idParam) setIDParam(idParam);
    if(stato=="true") setStato_ordine(true);
    if(stato=="false") setStato_ordine(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div>
      <Navbar client={client} ordini={Ordini} stato_ord={Stato_ordine} gestione={true} pizze={[]}></Navbar>
      {
      Stato_ordine === true && 
      <New_lista_pizze client={IDParam} data={Lista_pizze} ></New_lista_pizze>
      }
      {
      Stato_ordine === false && 
      <Ordini_classe></Ordini_classe>
      }
    </div>
  );
}

export default App;