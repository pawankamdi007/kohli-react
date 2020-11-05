import FileSaver from 'file-saver';

import { React,useEffect,useRef,useState } from 'react';

const Meme = () => {

    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [fontSize,setFontSize]=useState(35);
    const[fontFamily,setFontFamily]=useState("helvetica");
    const[fontColor,setFontColor]=useState("red");
    const [cwidth,setCwidth]=useState(300);
    const [cheight,setCheight]=useState(400);  
    useEffect(() => {
      const catImage = new Image();
      catImage.crossOrigin = 'Anonymous';
      catImage.src = "https://picsum.photos/300/400"
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
        ctx.fillRect(0, 0, 400, 500)
        ctx.drawImage(image, 0, 0)
  
        ctx.font = `${fontSize}px ${fontFamily}`
        ctx.fillStyle = `${fontColor}`
        ctx.textAlign = "center"
  
        ctx.fillText(topText, 150, 50)
        ctx.fillText(bottomText, 150,350)
  
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
        console.log(event.target.value);
        setFontColor(event.target.value);
    }
  
   function download(){

      var canvas = document.getElementById("myCanvas");
      canvas.toBlob(function(blob) {
      FileSaver.saveAs(blob, "pretty image.jpg");
      
  });
  console.log('hello');
    }
 
    return (
      <div>
        <div className="jumbotron mb-0 bg-secondary ">
        <h3>K-MEME GENERATOR</h3>
        </div>
        <div className="bg-success"> 
        <div className="container bg-dark">
            <div className="row"> 
            <div className="col-12  meme p-3">
            <canvas id="myCanvas" className="col-12 col-sm-4 mr-auto"
            ref={canvas}
            width={cwidth}
            height={cheight}
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
            <button className="btn btn-success mx-auto col-sm-3 mb-3" >Submit</button>
            <button className="btn btn-success mx-auto col-sm-3 mb-5" onClick={download}>Download</button>
            </div>
            </div>
            </div>
           </div> 
           
    )
  }
  
export default Meme;