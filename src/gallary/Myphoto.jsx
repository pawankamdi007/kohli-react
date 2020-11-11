import {FacebookShareButton, FacebookIcon} from "react-share";
const Photo =(temp)=>{
    const fun=()=>{
        console.log(temp);
    }
    return(
        <>
        <h1>Photo </h1>
        
        <img className="img-fluid" width="30%" src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg"/>
        <FacebookShareButton 
                url="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg"
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                className="btn">
                 <FacebookIcon size={36} />
              </FacebookShareButton>
              <button onClick={fun}>Click</button>
        </>
    )
}

export default Photo;