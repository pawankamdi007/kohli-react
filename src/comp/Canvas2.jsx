import FileSaver from 'file-saver';
import {useEffect, useState} from 'react';


const Canvas2=()=>{

    const [image,setImage]=useState("https://picsum.photos/300/300");
    const [fontSize,setFontSize]=useState();
    const[posX,setPosX]=useState(50);
    

    const imageUpload=(event)=>{
        
        var img=event.target.files[0];
        
        const catImage = new Image();
        catImage.src = URL.createObjectURL(img);
        catImage.onload=()=>setImage(catImage);
        console.log(catImage);
    }
    useEffect(()=>{
       
        const catImage = new Image();
        catImage.src = image
        catImage.onload=()=>setImage(catImage);
        
    });

   const fun2=()=>{
        const canvas=document.getElementById("myCanvas");
        const ctx=canvas.getContext("2d");
        ctx.drawImage(image, 0, 0,500,700);
    }

    const fun=()=>{
        const canvas=document.getElementById("myCanvas");
        const ctx=canvas.getContext("2d");
        
        const canvas1=document.getElementById("myCanvas2");
        const ctx1=canvas1.getContext("2d");
        
        ctx.drawImage(image, 0, 0,500,700);
        //ctx.clearRect(0,0,500,700);
        ctx.fillText("Hello", posX, 100);
        ctx.font = `${fontSize}px 'sans-serif'`;
        
       
        
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
        <canvas width="500" height="400" style={{background:"black",position:"relative",left:"100px"}} id="myCanvas">
        </canvas>
        <canvas  width="500" height="400"  style={{position:"absolute",left:"100px"}} id="myCanvas2"></canvas>
        </div>
        <input type="range" min="50" max="400" onChange={fun1} />
        <button onClick={download}>download</button> 

        <input type="range" className="custom-range" min="20" max="150" id="customRange1" onChange={font}></input>

    </>
);

}
export default Canvas2;