import FileSaver from 'file-saver';
import {FacebookShareButton, FacebookIcon} from "react-share";
import { React,useEffect,useRef,useState } from 'react';
import {Base64Binary} from 'react-file-base64';
import {Link} from 'react-router-dom';

const MyMemeApp = ({template}) => {

    const [image, setImage] = useState();
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [fontSize,setFontSize]=useState(35);
    const[fontFamily,setFontFamily]=useState("helvetica");
    const[fontColor,setFontColor]=useState("black");
    const[fb,setFb]=useState('');
    const[topTextX,SetTopTextX]=useState(250);
    const[topTextY,SetTopTextY]=useState(50);
    const[bottomTextX,SetBottomTextX]=useState(250);
    const[bottomTextY,SetBottomTextY]=useState(650);
  
    

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
          //ctx.clearRect(0,0,500,700);
          ctx.drawImage(image, 0, 0,500,700);
         
          ctx.font = `${fontSize}px ${fontFamily}`
          ctx.fillStyle = `${fontColor}`
          ctx.textAlign = "center"
          
          ctx.fillText(topText, topTextX, topTextY);
          ctx.fillText(bottomText, bottomTextX,bottomTextY);
          
        }
        
      }, [image, canvas, topText, bottomText,fontColor,fontFamily,fontSize])
    
      
  
 const topX=(e)=>{
  SetTopTextX(e.target.value);
  // console.log(e.target.value);
}
const topY=(e)=>{
  SetTopTextY(e.target.value);
}
const bottomX=(e)=>{
  SetBottomTextX(e.target.value);
}
const bottomY=(e)=>{
  SetBottomTextY(e.target.value);
}

    const font=(event)=>{
     /*  console.log(event.target.value); */
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
        
        <input type="text" className="form-control col-sm-3 mx-auto mb-2" placeholder="Top Text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <br />
          <input type="text" className="form-control col-sm-4 mx-auto mb-2" placeholder="Bottom Text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
            <input className="form-control col-sm-3 mx-auto mb-2" type="file" name="myImage" onChange={imageUpload} />
           
            
            <div className="col-12 col-sm-3  mx-auto mb-2 mt-2">
            <label for="customRange1" className="text-light text-center"><h5>Font Size</h5></label>
            <input type="range" className="custom-range" min="20" max="150" id="customRange1" onChange={font}></input>
            </div>

            <div className="col-12 col-sm-4  mx-auto mb-2 mt-2">
            <label for="customRange1" className="text-light text-center"><h5>Set Top text in x-direction</h5></label>
            <input type="range"className="custom-range" min="50" max="400" onChange={topX} />
            <label for="customRange1" className="text-light text-center"><h5>Set Top text in y-direction</h5></label>
            <input type="range"className="custom-range" min="50" max="400" onChange={topY} />
            </div>

            <div className="col-12 col-sm-3  mx-auto mb-2 mt-2">
            <label for="customRange1" className="text-light text-center"><h5>Set Bottom text in x-direction</h5></label>
            <input type="range"className="custom-range" min="50" max="450" onChange={bottomX} />
            <label for="customRange1" className="text-light text-center"><h5>Set Bottom text in y-direction</h5></label>
            <input type="range"className="custom-range" min="50" max="650" onChange={bottomY} />
            </div>

            <input className="form-control  col-sm-3 mx-auto mb-2" type="text" onChange={fontColorFun}   placeholder="Font Color"/>

            <select className="form-control  col-sm-3 mx-auto  mb-2" onChange={fontFamilyFun} type="select">
            <option defaultValue>Select Font style</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            </select>
            
            </div>
            <div className=" container form-inline">
            <button className="btn btn-success mx-auto col-sm-3 mt-3 mb-5" onClick={download}>Download</button>
            <a className="btn btn-success mx-auto col-sm-3 mt-3 mb-5" href="" >Back to Home</a>
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