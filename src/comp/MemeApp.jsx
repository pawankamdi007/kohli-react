import { useState } from "react";

const MemeApp=()=>{
    
    const[upper,setUpper]=useState();
    const[newUpper,setNewUpper]=useState();
    const[bottom,setBottom]=useState();
    const[newBottom,setNewBottom]=useState();
    const[image,setImage]=useState("https://picsum.photos/300/300"); 
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
    
    }
    const img="https://picsum.photos/300/400";
    return(
        <>
        <div className="jumbotron mb-0 bg-secondary ">
        <h3>K-MEME GENERATOR</h3>
        </div>
           <div className="bg-success"> 

            <div className="container bg-dark">
            <div className="row"> 
            <div className="col-12  meme p-3">
            <img id="main-img" className="img-thumbnail d-block mx-auto " width="300px" height="300px" src={image} alt=""/>     
            <h1 className="top"> {newUpper}</h1>
            <h1 className="bottom">{newBottom}</h1>
            </div>
            </div>
           
            <br />
            <div className="container cont p-3">
            <input className="form-control col-sm-3 mx-auto" type="text" onChange={inputEvent} value={upper} placeholder="Upper text"/><br />
            <input className="form-control col-sm-3 mx-auto" type="text" onChange={inputEvent2} placeholder="Bottom text"/><br />
            <input className="form-control col-sm-3 mx-auto" type="file" name="myImage" onChange={imageUpload} /><br/>
            <input className="btn btn-success col-sm-3 mx-auto  mt-2 mb-5 submit" onClick={fun} value="submit" type="submit"/>
            </div>

            </div>
            </div>
            </>
            
           
    );
};

export default MemeApp;