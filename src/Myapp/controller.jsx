import Home from './home';
import Meme from './memePage';
import { useEffect, useState } from "react";
import Footer from '../comp/Footer';
const { Switch,Route,Redirect } = require("react-router-dom");


const Controller=()=>{
   
    const[templates,setTemplates]=useState([]);
    

    useEffect(()=>{
       
        fetch("https://api.imgflip.com/get_memes").then(x=>x.json().then(response=>setTemplates(response.data.memes)))
    },[])

    const MemeWithId=({match})=>{
                 
        return(
            <>
            <Meme template={templates.find((item)=>item.id===match.params.memeId)} />
            </>
        )
        
    }
        

    return(
            <>
                
                <Switch>
                <Route exact path="/home" component={()=><Home file={templates}/>}/>
                 <Route path="/menu/:memeId" component={MemeWithId}/>
                 <Redirect to="/home" />
                </Switch> 
                <Footer />             
            </>
    )
}
export default Controller;