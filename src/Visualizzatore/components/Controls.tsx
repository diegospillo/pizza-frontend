import { XCircle,PlusCircle } from 'react-bootstrap-icons';

interface Props{
    i:number;
    cont:number;
    add:()=>void;
    remove:()=>void;
}
//setCont((prevCont) => prevCont - 1);
//setCont((prevCont) => prevCont + 1);
function Controls({i,cont,add,remove}:Props){
    return(
        <>
        {
            i > 0 && i === cont -1 &&
          <XCircle style={{ color: "red",fontSize:"25px", marginTop: "-51px",float:"left",marginLeft:"5px"}} onClick={() => remove()}></XCircle>
        }
        {
            i >=0 && i === cont -1 &&       
          <PlusCircle style={{ color: "blue",fontSize:"25px", marginTop: "-51px",float:"right",marginRight:"5px"}} onClick={() =>{
            add();
        }}></PlusCircle>
        }
        </>
    );
}

export default Controls;