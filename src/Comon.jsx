import React from "react";
import {NavLink} from "react-router-dom";


const Comon = (props) =>{
    return(
        <>
            <section id = "header" className ="d-flex align-items-center mt-5">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="headh1"> 
                                        Welcom to
                                        <strong className="brand-name"> Irina's</strong>
                                        {props.name}page
                                    </h1>
                                    <h2 className="">This is the best for you</h2>
                                    <div className="ml-4">
                                      <NavLink to={props.visit} className="btn-get-started">
                                        {props.btname}
                                      </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src = {props.imgsrc} className="img-fluid animated" alt={props.imgsrc}/>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Comon;