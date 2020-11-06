import React, { useState,useRef } from "react";
var ReactDOM = require("react-dom");

const NewApp=()=> {
  const[image,setImage]=useState(null);
  const[upper,setUpper]=useState('');
  const file = useRef(null)

const textUpper=(e)=>{
    setUpper(e.target.value);
}
  const renderCanvas=()=>{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("user-Img");

    // calculate the scaling factor to resize new image to
    //     fit MAX dimensions without overflow
    var scalingFactor = Math.min(600 / img.width, 600 / img.height);

    // calc the resized img dimensions
    var iw = img.width * scalingFactor;
    var ih = img.height * scalingFactor;

    // resize the canvas to the new dimensions
    canvas.width = iw;
    canvas.height = ih;

    // scale & draw the image onto the canvas
    ctx.drawImage(img, 0, 0, iw, ih);
    ctx.font = "32px sans-serif"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
  
        ctx.fillText(upper, iw/2, 50)
 
  }

  const onImageChange = (event) => {
    if (event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
      //Load image into div
      const imagePreview = (
        <div>
          <div id="circularEdit">
            <img
              src={image}
              className="center"
              style={{ verticalAlign: "middle", cursor: "pointer",width:"100%",display:"none" }}
              id="user-Img" alt="myimg"
            />
          </div>
        </div>
      );
      ReactDOM.render(imagePreview, document.getElementById("picturePreview"));
    }
  };

    return (
      <div>
        <input
          type="file"
          id="profile-picture-file"
          onChange={onImageChange}
          name="myImage"
          accept="image/*"
         
        />

        <h5>Image Preview</h5>
        
        <div id="picturePreview" />
        <button onClick={renderCanvas}>Map to canvas</button>
        
        <canvas
          id="myCanvas"
          width="600"
          height="600"
          ref={file}
          style={{ objectFit: "cover" }}
        />
        <input type="text" placeholder="upper text" onChange={textUpper} />

      </div>
    );
  }

  export default NewApp;
