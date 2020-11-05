import FileSaver from 'file-saver';

import { React,useEffect,useRef,useState } from 'react';

const Meme = () => {

    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
  
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
        catImage.onload = () => setImage(catImage)};
      
        

    useEffect((width) => {
      if(image && canvas) {
        const ctx = canvas.current.getContext("2d")
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, 400, 500)
        ctx.drawImage(image, 0, 0)
  
        ctx.font = "20px Comic Sans MS"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
  
        ctx.fillText(topText, 150, 50)
        ctx.fillText(bottomText, (150),350)
  
      }
    }, [image, canvas, topText, bottomText])
  
   function download(){

      var canvas = document.getElementById("myCanvas");
      canvas.toBlob(function(blob) {
      FileSaver.saveAs(blob, "pretty image.jpg");
      
  });
  console.log('hello');
    }
 
    return (
      <div>
        <h1>Cat Meme!</h1>
  
        <div className="container justify-content-center">
          <canvas id="myCanvas" className="col-12 col-sm-4 mr-auto"
            ref={canvas}
            width={300}
            height={400}
          />
        </div>
  
        <div>
          <input type="text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <br />
          <input type="text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          /><br />
          <input className="form-control col-sm-3 mx-auto mb-2" type="file" name="myImage" onChange={imageUpload} /><br/>
          <button className="btn btn-success" onClick={download}>Download</button>
        </div>
  
      </div>
    )
  }
  
export default Meme;