import FileSaver from 'file-saver';
import {FacebookShareButton, FacebookIcon} from "react-share";
import { React,useEffect,useRef,useState } from 'react';
import {Base64Binary} from 'react-file-base64';
const MyMemeApp = ({template}) => {

    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [fontSize,setFontSize]=useState(35);
    const[fontFamily,setFontFamily]=useState("helvetica");
    const[fontColor,setFontColor]=useState("black");
    const[fb,setFb]=useState('');
   

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
         
          ctx.drawImage(image, 0, 0,500,700)
    
          ctx.font = `${fontSize}px ${fontFamily}`
          ctx.fillStyle = `${fontColor}`
          ctx.textAlign = "center"
          
         
    
          ctx.fillText(topText, 250, 50)
          ctx.fillText(bottomText, 250,650)
    
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
  function share(){
   /*  var img=new Image();
    img.src=canvas.toDataURL("image/png");
    console.log(img);
    setFb(img.url); */
    const myCanvas=document.getElementById("myCanvas");
    var imgdata=new Image();
    imgdata=myCanvas.toDataURL("image/png");
    /* var encodedPng = img.substring(img.indexOf(',') + 1, img.length);
    var decodedPng = Base64Binary.decode(encodedPng);
    setFb(decodedPng); */
    
  }
    return (
      <div>
        {/* <img width="10%" src={fb} alt=""/> */}
        <div className="bg-success"> 
        <div className="container bg-dark">
            <div className="row"> 
            <div className="col-12  meme p-4">
            <canvas id="myCanvas" className="col-12 col-sm-4 mx-auto p-2"
            ref={canvas}
            width="500"
            height="700"
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
            {/* <button className="btn btn-success mx-auto col-sm-3 mt-3 mb-5" onClick={share}>Share</button>
            <FacebookShareButton 
                url={fb}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                className="btn">
                 <FacebookIcon size={36} />
              </FacebookShareButton> */}
            </div>
            </div>
            </div>
           </div> 
           
    )
  }
  
export default MyMemeApp;