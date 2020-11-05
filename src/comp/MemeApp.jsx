import { useState } from "react";


const MemeApp=()=>{
    
    const[upper,setUpper]=useState();
    const[newUpper,setNewUpper]=useState();
    const[bottom,setBottom]=useState();
    const[newBottom,setNewBottom]=useState();
    const[image,setImage]=useState("https://picsum.photos/300/300"); 
    const [fontSize,setFontSize]=useState(35);
    const[fontFamily,setFontFamily]=useState("helvetica");
    const[fontColor,setFontColor]=useState("white");

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
    const font=(event)=>{
      console.log(event.target.value);
      setFontSize(event.target.value);
        //$("#upper").css("font-size","fontSize");
    } 
    const fontFamilyFun=(event)=>{
        console.log(event.target.value);
        setFontFamily(event.target.value);
    }
    const fontColorFun=(event)=>{
        console.log(event.target.value);
        setFontColor(event.target.value);
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
            <a href={image} download="w3logo.jpg">
            <img id="main-img" className="img-thumbnail d-block mx-auto " width="300px" height="300px" src={image} alt=""  />     
            </a>
            <p id="upper" className="top" style={{fontSize:`${fontSize}px`,fontFamily:fontFamily,color:fontColor}}> {newUpper}</p>
            <h1 id="bottom" className="bottom" style={{fontSize:`${fontSize}px`,fontFamily:fontFamily,color:fontColor}} >{newBottom}</h1>
            </div>
            </div>
           
            <br />
            <div className="container cont p-3 form-inline">
            <input className="form-control col-sm-4 mx-auto mb-2" type="text" onChange={inputEvent} value={upper} placeholder="Upper text"/><br />
            <input className="form-control col-sm-4 mx-auto mb-2" type="text" onChange={inputEvent2} placeholder="Bottom text"/><br />
            <input className="form-control col-sm-3 mx-auto mb-2" type="file" name="myImage" onChange={imageUpload} /><br/>
            <input className="form-control  col-sm-4 mx-auto mb-2" type="number" onChange={font} min="10" max="35"  placeholder="Font Size"/>
            <input className="form-control  col-sm-4 mx-auto mb-2" type="text" onChange={fontColorFun}   placeholder="Font Color"/>

            <select className="form-control  col-sm-3 mx-auto  mb-2" onChange={fontFamilyFun} type="select">
            <option defaultValue>Select Font style</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            </select>
            </div>
            <div className=" container form-inline">
            <input className="btn btn-success col-sm-3 mx-auto  mt-3 mb-3 submit" onClick={fun} value="submit" type="submit"/>
            <input className="btn btn-success col-sm-3 mx-auto  mt-3 mb-5 " value="Download" type="button"/>
            </div>
            </div>
            </div>
            </>
            
           
    );
};

export default MemeApp;