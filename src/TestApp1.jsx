import { useState } from "react";
import "./index.css";
import first from './img/img3.jpg';


const TestApp1=()=>{
    
    const[upper,setUpper]=useState();
    const[newUpper,setNewUpper]=useState();
    const[bottom,setBottom]=useState();
    const[newBottom,setNewBottom]=useState();
    const[image,setImage]=useState(first); 
    const inputEvent=(event)=>{
        setUpper(event.target.value);   
    }

    const fun=()=>{
        setNewUpper(upper);
        setNewBottom(bottom);
    }

    const inputEvent2=(event)=>{
        setBottom(event.target.value);
    }
    const imageUpload=(event)=>{
        var img=event.target.files[0];
       
    setImage( URL.createObjectURL(img));
    console.log(img);
    
    }
    const img="https://picsum.photos/300/400";
    return(
        <>
            <div className="container">
            <img className="mt-2" src={image} alt=""/>
            
            <h1 className="top"> {newUpper}</h1>
            <h1 className="bottom">{newBottom}</h1>
            </div>
           
            <br />
            <div className="container">
            <input className="form-control col-sm-3 mx-auto" type="text" onChange={inputEvent} value={upper} placeholder="Upper text"/><br />
            <input className="form-control col-sm-3 mx-auto" type="text" onChange={inputEvent2} placeholder="Bottom text"/><br />
            <input className="form-control col-sm-3 mx-auto" type="file" name="myImage" onChange={imageUpload} /><br/>
            <input className="btn btn-success mx-auto mt-2" onClick={fun} value="submit" type="submit"/>
            
            </div>
        </>
    );
};

export default TestApp1;