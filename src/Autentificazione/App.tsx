import { GoogleOAuthProvider} from '@react-oauth/google';
import Login from './Login/App'
import SignUp from './Sign_Up/App';
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
    const [value_ord,setValue_ord] = useState("null");
    const [data, setData] = useState([]);
    console.log(value_ord);
    const fetchData = async ()=>{
      const { data } = await axios.get('https://pizzappbackend.onrender.com/get_Classi');
      console.log(data);
      setData(data);
    }
  
    useEffect(() => {
      fetchData();
    }, []);
    


    return (
      <>
      <nav className="navbar bg-warning" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://www.midossi.edu.it/images/loghi-midossi/logo-midossi-150-150.png"/>
            <span className="navbar-brand mb-0 h1 align-text-top" style={{fontSize:"30px",color:"black"}}>PizzApp</span>
          </a>
    </div>
      </nav>
        <GoogleOAuthProvider clientId="245270099555-8r0ukuu8lr24dfqoj2g357b976e6us9b.apps.googleusercontent.com">
          <center>
            <Login></Login>
            <hr style={{marginTop:"100px"}}></hr>
            <SignUp value_ord={value_ord} SetValue_ord={(value:string)=>setValue_ord(value)} data={data}></SignUp>
          </center>
        </GoogleOAuthProvider>
      </>
    );
}

export default App;