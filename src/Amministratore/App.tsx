import New_lista_pizze from "./components/Form_ordine";
import {useState, useEffect} from "react";
import axios from "axios";

function App(){
  const [data_res, setData_res] = useState([]);
  
  const fetchData = async ()=>{
    const idParam = new URLSearchParams(location.search).get("id");
    const data_res = (await axios.get('https://pizzappbackend.onrender.com/get_Ordini_Classe?id='+idParam)).data;
    setData_res(data_res);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  //console.log(data_res);
  

  return(
    <div>
      <New_lista_pizze data={data_res}></New_lista_pizze>
    </div>
  );
}

export default App;