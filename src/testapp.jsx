import { useState } from "react";
import "./index.css";

const TestApp=()=>{
    
    const[upper,setUpper]=useState();
    const[newUpper,setNewUpper]=useState();
    const[bottom,setBottom]=useState();
    const[newBottom,setNewBottom]=useState();

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

    return(
        <>
            <div className="container">
            <img className="mt-2" src="https://picsum.photos/300/400" alt=""/>
            <h1 className="top"> {newUpper}</h1>
            <h1 className="bottom">{newBottom}</h1>
            </div>
           
            <br />
            <div className="container">
            <input className="form-control col-sm-3 mx-auto" type="text" onChange={inputEvent} value={upper} placeholder="Upper text"/><br />
            <input className="form-control col-sm-3 mx-auto" type="text" onChange={inputEvent2} placeholder="Bottom text"/><br />
            <input className="btn btn-success mx-auto" onClick={fun} value="submit" type="submit"/>
            </div>
        </>
    );
};

export default TestApp;