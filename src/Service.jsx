import React from "react";
import Card from "./Card";
import Carddata from "./Carddata";


const Service = () => {
  return (
    <>
      <div className="my5">
        <h1 className="text-center">
          Our Services
        </h1>
      </div>
      <div className="container-fluid my-4">
            <div className="row">
                <div className="col-10 mx-auto">
                   <div className="row gy-4">
                     
                     {
                       Carddata.map((val, ind) =>{
                         return(
                           <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
                         )
                       })

                     }
                     
                     </div>
                   </div>
                </div>
                </div>
                
    </>
  );
};

export default Service;
