import Storico_ordini from "./components/Storico_ordini";
import Navbar from "../Navbar/Navbar";
import {useState, useEffect} from "react";
import axios from "axios";

function App(){
    const [data_res, setData_res] = useState([]);
    const [Lista_pizze, setLista_pizze] = useState([]);
    const [client, setClient] = useState([]);
    const [IDParam, setIDParam] = useState("null");
    //RICORDARE DI PASSARE LA DATA
  const fetchData = async ()=>{
    const idParam = new URLSearchParams(location.search).get("id");
    const Data_giorno = new URLSearchParams(location.search).get("data");
    const client_res = (await axios.get('https://pizzappbackend.onrender.com/get_Amministratore?id='+idParam)).data;
    const data_res = (await axios.get(`https://pizzappbackend.onrender.com/get_Ordini_All_Classi?data=${Data_giorno}`)).data;
    const lista_pizze_res = (await axios.get('https://pizzappbackend.onrender.com/get_Pizze')).data;
    setLista_pizze(lista_pizze_res);
    setData_res(data_res);
    setClient(client_res[0]);
    if(idParam) setIDParam(idParam);
    var Date_element = document.getElementById("dateStandard") as HTMLDataElement;
    if(Date_element && Data_giorno)Date_element.value = Data_giorno;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div>
      <Navbar pizze={Lista_pizze} client={client} ordini={[]} stato_ord={false} gestione={false}></Navbar>
      <Storico_ordini data={data_res} client={IDParam}></Storico_ordini>
    </div>
  );
}

export default App;