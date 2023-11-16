import { useGoogleLogin  } from '@react-oauth/google';
import axios from 'axios';
import { HTMLAttributes } from 'react';
import { useState } from 'react';

function signUp() {
    const [id_classe,setId_classe] = useState("null");
    const login = useGoogleLogin({
      onSuccess: async (response)=>{
        try{
              console.log("entra");
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers:{
                        Authorization: `Bearer ${response.access_token}`,
                    },
                });
                //console.log(res);
                Check_Account(res,id_classe);
            }catch (err){
                console.log(err);
            }
        }
      });
      function check_selezione_classe() {
        var input_ck = document.getElementById("ord") as HTMLSelectElement;
        if(input_ck){
          var val = input_ck.value;
          if(val=="null") alert("Seleziona la classe");
          else{
            setId_classe(val);
            login();
          }
        }
      }
      return (
        <>
            <a id='id_redirect' href='/'></a>
            <button  onClick={() => check_selezione_classe()} className="btn btn-warning offcanvas-title" id="offcanvasNavbarLabel" style={{fontSize:"20px"}}>Registrati</button>
        </>
        );
}

async function Check_Account(dati:any,id_classe:string){
    console.log(dati);
    const a_rd = document.getElementById("id_redirect") as HTMLLinkElement;
    /*if(dati.data.hd){
    if(dati.data.hd == "midossi.it"){*/
    const { data } = await axios.get(`https://pizzappbackend.onrender.com/insert_Studenti?id=${dati.data.sub}&nome=${dati.data.given_name}&cognome=${dati.data.family_name}&email=${dati.data.email}&classe=${id_classe}`);
    
    if(data.stato==true){
        alert("Account registrato con successo");
    }
    else{
        alert("Mi dispiace ma questo account è già registrato");
    }
/*  }
  else{
    alert("Email non valida");
  }
}
else{
  alert("Email non valida");
}*/
a_rd.click();
}

  


export default signUp;