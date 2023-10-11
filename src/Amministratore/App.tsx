import Navbar from "../Navbar/Navbar";
import New_lista_pizze from "./components/Form_ordine";
import {useState, useEffect} from "react";
import axios from "axios";

function App(){
  const [data_res, setData_res] = useState([]);
  
  const fetchData = async ()=>{
    const { data } = await axios.get('http://localhost:8000/amministratore/');
    setData_res(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  //console.log(data_res);
  

  return(
    <div>
      <Navbar></Navbar>
      <New_lista_pizze data={data_res}></New_lista_pizze>
    </div>
  );
}

export default App;