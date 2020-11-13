import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import MyMemeApp from "../comp/MyMemeApp";
import {Link} from 'react-router-dom';

const One=()=>{
    
    const[templates,setTemplates]=useState([]);
    const[template,setTemplate]=useState(null);

    useEffect(()=>{
       
        fetch("https://api.imgflip.com/get_memes").then(x=>x.json().then(response=>setTemplates(response.data.memes)))
    },[])
    
    
    return(
        <>
        <div className="bg-success">
        <div className="jumbotron mb-0 bg-secondary ">
        <h3>K-MEME GENERATOR</h3>
       
           {!template&&<h3 className="text-center mt-3 mb-0">Pick A Meme</h3>}  
        </div>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Menu</li>
  </ol>
</nav>

        
        {template && <MyMemeApp template={template} />}        
        
        <div className="container pt-3 pb-5">
        <div class="row bg-dark">
        {!template && templates.map((template)=>{
            return(
                <>
               
                <div className="col-12 col-md-3 m-0 p-0"  >
                    <div  className="bg-dark mt-2 m-1" style={{border:"3px solid white"}} key={template.id}>
                    <img style={{width:"100%",height:"300px"}} src={template.url} alt={template.name}  onClick={() => setTemplate(template)} />
                    </div>
                 </div>
               {/* <card className="card col-12 col-sm-3 m-1">
                <img className="img img-fluid" key={template.id} src={template.url} alt={template.name} onClick={()=>setTemplate(template)}/>
              </card> */}
                </>
            )
        })}
        </div>
        </div>
       </div>
        </>
    );
}
export default One;
