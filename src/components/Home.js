import '../css/index.css';
import department1 from '../images/departamento-1.jpg';
import department2 from '../images/departamento-2.jpg';
import department3 from '../images/departamento-4.jpg';

const Home = () =>{
    return(
        <>
        <div id="wrapper">
        <section className="departments-carousel-section">
            <div className="row">

                <div className="col-12 col-departments">
                    <div id="departaments-carousel-controls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={department1} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={department2} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={department3} className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#departaments-carousel-controls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#departaments-carousel-controls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>
        </section>
        </div>
        </>
    )
}

export default Home;