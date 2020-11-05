import React, { Component } from "react";

var ReactDOM = require("react-dom");

export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  renderCanvas() {
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
  }

  onImageChange = async event => {
    if (event.target.files && event.target.files[0]) {
      await this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
      //Load image into div
     
      
    }
  };
  render() {
    return (
      <div>
        <input
          type="file"
          id="profile-picture-file"
          onChange={this.onImageChange}
          name="myImage"
          accept="image/*"
          ref={ref => (this.fileUpload = ref)}
        />
        <h5>Image Preview</h5>
        <div id="picturePreview">
        <div>
          <div id="circularEdit">
            <img
              id="target"
              src={this.state.image}
              className="center"
              style={{ verticalAlign: "middle", cursor: "pointer",width:"50%",display:"none" }}
              id="user-Img" alt="preview img"
            />
          </div>
        </div>
        </div>
        <button onClick={() => this.renderCanvas()}>Map to canvas</button>
        <canvas
          id="myCanvas"
          width="600"
          height="600"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }
}
