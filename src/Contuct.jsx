import React from "react";


const Contuct = () => {
  return (
    <>
      <div className="my5">
        <h1 className="text-center">
          Contuct Me
        </h1>
      </div>
      <div className="container continer-div my-4">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Write Your Comment</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contuct;
