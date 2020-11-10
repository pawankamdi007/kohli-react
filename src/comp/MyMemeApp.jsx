import FileSaver from 'file-saver';

import { React,useEffect,useRef,useState } from 'react';

const MyMemeApp = ({template}) => {

    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [fontSize,setFontSize]=useState(35);
    const[fontFamily,setFontFamily]=useState("helvetica");
    const[fontColor,setFontColor]=useState("red");
   

    useEffect(() => {
      const catImage = new Image();
      catImage.crossOrigin = 'Anonymous';
      catImage.src = template.url;
      catImage.onload = () => setImage(catImage)
    }, [])

    const imageUpload=(event)=>{
        var img=event.target.files[0];
        
        const catImage = new Image();
        catImage.src = URL.createObjectURL(img);
        catImage.onload = () => setImage(catImage)
        
      };
      
      useEffect(() => {
        if(image && canvas) {  
  
          const ctx = canvas.current.getContext("2d")
          ctx.fillStyle = "black"
         
          ctx.drawImage(image, 0, 0,500,600)
    
          ctx.font = `${fontSize}px ${fontFamily}`
          ctx.fillStyle = `${fontColor}`
          ctx.textAlign = "center"
          
         
    
          ctx.fillText(topText, 250, 50)
          ctx.fillText(bottomText, 250,550)
    
        }
      }, [image, canvas, topText, bottomText,fontColor,fontFamily,fontSize])
    

  


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
        setFontColor(event.target.value);
    }
  
   function download(){

      var canvas = document.getElementById("myCanvas");
      canvas.toBlob(function(blob) {
      FileSaver.saveAs(blob, "pretty image.jpg");
     
  });
  
    }
 
    return (
      <div>
        
        <div className="bg-success"> 
        <div className="container bg-dark">
            <div className="row"> 
            <div className="col-12  meme p-4">
            <canvas id="myCanvas" className="col-12 col-sm-4 mx-auto p-2"
            ref={canvas}
            width="500"
            height="600"
            style={{ objectFit: "contain" }}
          /> 
            </div>
            </div>
  
        <div className="container cont p-3 form-inline">
        <input type="text" className="form-control col-sm-4 mx-auto mb-2" placeholder="Top Text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <br />
          <input type="text" className="form-control col-sm-4 mx-auto mb-2" placeholder="Bottom Text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
            <input className="form-control col-sm-3 mx-auto mb-2" type="file" name="myImage" onChange={imageUpload} />
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
            <button className="btn btn-success mx-auto col-sm-3 mt-3 mb-5" onClick={download}>Download</button>
            </div>
            </div>
            </div>
           </div> 
           
    )
  }
  
export default MyMemeApp;