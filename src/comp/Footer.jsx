import "../App.css";
import logo from '../logo/K_Logo_White.png';
import google from '../logo/google-badge.png';


const Footer=()=>{
    return(
        <>
        <footer className="mt-5" >
<div className="container">
<div className="row">
<div className="col-12 col-sm-3 mb-3 pt-4">
    <a className="navbar-brand" href="#">
        <img id="logo" className="img-fluid"  src={logo} alt="" /> <i>Kohli</i> MEDIA LLP.
    </a>
    <p className="text-justify">
       Kohli Company founded in 2006 is a group of businesses, that develop innovative 
       Web Products serving people worldwide, is now Kohli Media Lpp-an Indian Limited 
       Liablitiy Partnership.
    </p>
</div>
<div className="col-12 col-sm-3 mb-3 pt-5">
    <div className="offset-1">
    <h3>Useful Links</h3>
    <p>Terms of Service</p>
    <p>Privacy Policy</p>
    </div>
</div>
<div id="contact" className="col-12 col-sm-3 mb-3 pt-5">
    <h3>Contact Us</h3>
    <hr />
    <address>
       Kohli Media LLP. SCO 31, 160062,<br/>
       Sector 86 Mohali-<br/>
       India.<br/>
      <span className="fa fa-phone fa-1x"> +91-6280848783</span> <br/>
      <span className="fa fa-envelope fa-1x"> co@kohli.tel </span>
    </address>
</div>
<div className="col-12 col-sm-3 mb-3 pt-5">
   <h3>Family</h3>
   <hr/>
   <div className="family">   
   <li>Kohli.Studio</li>
   <li>Kohli Production</li>
   <li>LiveDesk</li>
   <li>HotJob.Club</li>
   <li>QRON.top</li>
   <li>Kohli Hosting</li>
   <li>Kohli mail</li>
   <li>Kohli Connect</li>
   <li>Kohli Web Design</li>
   <li>Kohli Education</li>
   </div>
</div>
</div>
</div>
<div className="container">
<h4 className="mt-3 mt-lg-0">Connect on Social Media</h4>
<div className="row">
<div className="col-12 col-sm-3  mt-3">
    <div className="text-center">
    <a className="btn btn-social-icon btn-facebook m-2" href="https://www.facebook.com/KohliConnect/"><i className="fa fa-facebook"></i></a>
    <a className="btn btn-social-icon btn-twitter m-2" href="https://twitter.com/KohliConnect"><i className="fa fa-twitter"></i></a>  
    <a className="btn btn-social-icon btn-instagram m-2" href=" https://www.instagram.com/KohliConnect/"><i className="fa fa-instagram"></i></a> 
   
</div>
</div>

<div className="col-12 col-sm-9">
     <a className="float-lg-right " href="https://play.google.com/store/apps/details?id=com.kohli.studio.kohli"><img id="google-play" className="d-block mx-auto mt-3" src={google} width="250" height="90" alt=""/></a>
</div>
</div>  
</div> 
<div className="row mt-3">
<div className="col-12 col-sm-12 text-center">
    <p className="mb-0 mt-3">Copyright &#169; 2006-2020 <strong>Kohli Connect</strong>-Kohli Media LLP.</p>
    <span className="mwl">#MadeWithLove</span> <span className="ks">&hearts; <a href="http://www.kohli.studio/">Kohli.Studio</a></span>
    <button className="btn btn-light scrollbtn"><a href="#top"><span className="fa fa-arrow-up"></span></a></button> 
</div>
</div>
</footer>


        </>
    )
}
export default Footer;
