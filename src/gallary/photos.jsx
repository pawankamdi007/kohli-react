import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from 'axios';
const Photos = () => {

    const[user,setUser]=useState("LiwkWfLPr5uVRXiPCbm5KWf2RfE_i_gWePJX-PdQCj0");

    const[search,setSearch]=useState();
    const[result,setResult]=useState([]);


    


   function handleChange(e){
        console.log(e.target.value);
        setSearch(e.target.value);
    } 

    function handleSubmit(){
        const ur2="https://api.imgflip.com/get_memes";
        const url=`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=LiwkWfLPr5uVRXiPCbm5KWf2RfE_i_gWePJX-PdQCj0`;
        axios.get(url).then((response)=>{
            setResult(response.data.results);
            console.log(response)
        })   

    }    
    const fun=(e)=>{
        console.log(e.target.value);
    }
      

  return(
            <>
            <h1>Hello</h1>
            <input type="text" onChange={handleChange}/>
            <button className="btn btn-primary" onClick={handleSubmit}>submit</button>
                {result.map((photo)=>{
                    return(
                        <>
                   <img onClick={(e)=>fun(e)} width="50%" className="img img-fluid" src={photo.urls.small} alt="photo"/>
                   </>
                    )
                })}
            </>
        )
}
   
export default Photos;