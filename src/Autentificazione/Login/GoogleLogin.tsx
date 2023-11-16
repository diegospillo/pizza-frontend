import { useGoogleLogin  } from '@react-oauth/google';
import axios from 'axios';
import { HTMLAttributes } from 'react';

function Login() {
    //const [dati_client,setDati_client] = useState(null);
    const login = useGoogleLogin({
        onSuccess: async (response)=>{
            try{
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers:{
                        Authorization: `Bearer ${response.access_token}`,
                    },
                });
                //console.log(res);
                Check_Account(res);
            }catch (err){
                console.log(err);
            }
        }
      });
      return (
        <>
            <a id='id_redirect' href=''></a>
            <button  onClick={() => login()} className="btn btn-warning offcanvas-title" id="offcanvasNavbarLabel" style={{fontSize:"20px",marginTop:"100px"}}>Accedi</button>
        </>
        );
}

async function Check_Account(dati:any){
    console.log(dati);
    const a_rd = document.getElementById("id_redirect") as HTMLLinkElement;
    const { data } = await axios.get(`https://pizzappbackend.onrender.com/check_id_Studenti?id=${dati.data.sub}`);
    
    if(data.stato==true){
        a_rd.href = `/ordine?id=${dati.data.sub}&stato=true`;
        a_rd.click();
    }
    else{
        alert("Account non registrato");
    }
}


export default Login;