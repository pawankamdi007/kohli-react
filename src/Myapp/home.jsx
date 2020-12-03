
import MyMemeApp from "../comp/MyMemeApp";
import { Link, Switch, Route, Redirect } from 'react-router-dom';

const Home = ({ file }) => {


    const meme = file.map((template) => {
        return (
            <>
                <div className="col-12 col-md-3 m-0 p-0" >
                    <Link to={`/menu/${template.id}`}>
                        <div className="bg-dark mt-2 m-1" style={{ border: "3px solid white" }} key={template.id}>
                            <img style={{ width: "100%", height: "300px" }} src={template.url} alt={template.name} />
                        </div>
                    </Link>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="bg-success">
                <div className="jumbotron mb-0 bg-secondary ">
                    <h3>K-MEME GENERATOR</h3>
                    <h3 className="text-center mt-3 mb-0">Pick A Meme</h3>
                </div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    {meme}
                </div>
            </div>
            

        </>
    );

}

export default Home;
