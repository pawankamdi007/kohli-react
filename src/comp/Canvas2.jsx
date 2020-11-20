import FileSaver from 'file-saver';
import {useState} from 'react';


const Canvas2=()=>{

    const [image,setImage]=useState();
    const [fontSize,setFontSize]=useState(35);
    const[posX,setPosX]=useState(50);
    
    const imageUpload=(event)=>{
        
        var img=event.target.files[0];
        
        const catImage = new Image();
        catImage.src = URL.createObjectURL(img);
        catImage.onload=()=>setImage(catImage);
        console.log(catImage);
    }
    const fun=()=>{
        const canvas=document.getElementById("myCanvas");
        const ctx=canvas.getContext("2d");
        const canvas1=document.getElementById("myCanvas2");
        const ctx1=canvas1.getContext("2d");
        
        ctx.drawImage(image, 0, 0,500,700);
        ctx1.font = `${fontSize} 'sans-serif'`;
        ctx1.clearRect(0,0,500,300);
        ctx1.fillText("Hello", posX, 100);
        
    }
    
    const fun1=(e)=>{
        console.log(e.target.value);
        setPosX(e.target.value);
        fun();
    }
    const font=(event)=>{
          console.log(event.target.value); 
         setFontSize(event.target.value);
           //$("#upper").css("font-size","fontSize");
           fun();
       } 
    function download(){
        console.log("hello");
        var canvas = document.getElementById("myCanvas");
        const ctx=canvas.getContext("2d");
        const canvas1=document.getElementById("myCanvas2");
       
        ctx.drawImage(canvas1, 0, 0);
        canvas.toBlob(function(blob) {
        FileSaver.saveAs(blob, "pretty image.jpg"); 
    });
   
  }   
    
return(
    <>
        <h1>My name is pawan</h1>
       
        <img width="50%" height="300px" src={image} alt="" />

        <input  type="file" name="myImage" onChange={imageUpload} />
        <button onClick={fun}>Click</button>
        <div>
        <canvas width="500" height="400" style={{background:"black",position:"relative"}} id="myCanvas">
        </canvas>
        <canvas  width="500" height="400"  style={{position:"absolute",left:"0px"}} id="myCanvas2"></canvas>
        </div>
        <input type="range" min="50" max="400" onChange={fun1} />
        <button onClick={download}>download</button> 

        <input type="range" className="custom-range" min="20" max="150" id="customRange1" onChange={font}></input>

    </>
);

}
export default Canvas2;