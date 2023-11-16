import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from './GoogleLogin'

interface Classi {
  value_ord: string;
  SetValue_ord: (value:string)=>void;
  data:any[];
}

function App({value_ord,SetValue_ord,data}:Classi) {

  function selezionato(){
    var selectDaVerificare = document.getElementById("selectClasse") as HTMLSelectElement;
    if(selectDaVerificare){
      var indiceSelezionato = selectDaVerificare.value;
      console.log("ID:"+indiceSelezionato);
      SetValue_ord(indiceSelezionato);
    }
  }


  return (
    <div style={{marginTop:"100px"}}>
    <input id={"ord"} type="hidden" name="classe" value={value_ord}/>
      <select
        id={"selectClasse"}
        className="form-select form-select-lg mb-3"
        aria-label="Large select example"
        style={{ marginTop: "20px", width: "250px" }}
        onChange={()=>selezionato()}
      >
        <option value={"null"} selected>Seleziona Classe</option>
        {data.map((item:any) => (
              <option value={item.id} key={data.indexOf(item)}>
                {item.anno+item.sezione}
              </option>
        ))}
      </select>
      <GoogleOAuthProvider clientId="245270099555-8r0ukuu8lr24dfqoj2g357b976e6us9b.apps.googleusercontent.com">
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;