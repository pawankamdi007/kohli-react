import {Switch,Route,Redirect} from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './pk/home';
import Service from './pk/Service';
import One from './meme/one';
import MyMemeApp from './comp/MyMemeApp';
import Footer from './comp/Footer';
const TestApp1=()=>{

    return(
        <>
            <Switch>
                <Route  exact path="/" component={One}/>
                <Route  exact path="/menu" component={MyMemeApp}/>
                <Redirect to="/" />
            </Switch>
            <Footer/>

         </>
            
           
    );
};

export default TestApp1;