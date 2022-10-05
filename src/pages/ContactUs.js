import React from "react";

const ContactUs = () => {
  return (
    <div className="Screen">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 Block">
          <h5 className="text-center">Reach out to us here</h5>
          <hr />
          <div className="col-md-12 col-sm-12 col-xs-12 ">
            <div className="row" Style="padding: 5px;">
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">Tejas Shirode</strong>
                <br />
                <label className="fs-7">Store Manager</label>
                <br />
                <label className="fs-7">tbshiroode22@gmail.com</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">RM-141</strong>
                <br />
                <label className="fs-7">Ganpat Nagar</label>
                <br />
                <label className="fs-7">Nashik</label>
                <br />
                <label className="fs-7">Maharashtra | India</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12"
                Style="padding: 15px;"
              >
                <strong className="fs-5"> Contact </strong>
                <br />
                <label className="fs-7"> 8862003253</label>
                <br />
                <label className="fs-7"> 0233-2651311 </label>
                <br />
                <label className="fs-7"> 1800-9090-5544 </label>
              </div>
            </div>
            <hr />

            <div className="row" Style="padding: 5px;">
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">Mahesh Wagh</strong>
                <br />
                <label className="fs-7">Store Manager</label>
                <br />
                <label className="fs-7">maheshwagh@gmail.com</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">E/3/10</strong>
                <br />
                <label className="fs-7">Malegaon</label>
                <br />
                <label className="fs-7">Nashik</label>
                <br />
                <label className="fs-7">Maharashtra | India</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12"
                Style="padding: 15px;"
              >
                <strong className="fs-5"> Contact </strong>
                <br />
                <label className="fs-7">9923711861</label>
                <br />
                <label className="fs-7"> 020-22651311 </label>
                <br />
                <label className="fs-7"> 1800-9090-5544 </label>
              </div>
            </div>
            <hr />

            <div className="row" Style="padding: 5px;">
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">Unmesh Kadam</strong>
                <br />
                <label className="fs-7">Store Manager</label>
                <br />
                <label className="fs-7">unmeshkadam4255@gmail.com</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <label className="fs-7">Ratnagiri | Maharashtra | India </label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12"
                Style="padding: 15px;"
              >
                <strong className="fs-5"> Contact </strong>
                <br />
                <label className="fs-7"> 7020868203 </label>
                <br />
                <label className="fs-7"> 1008520010 </label>
                <br />
                <label className="fs-7"> 1800-9090-5544 </label>
              </div>
            </div>

            <div className="row" Style="padding: 5px;">
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <strong className="fs-5">Vikram Nikam</strong>
                <br />
                <label className="fs-7">Store Manager</label>
                <br />
                <label className="fs-7">vikramnikam@gmail.com</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12 Block"
                Style="padding: 15px;"
              >
                <label className="fs-7">Satara | Maharashtra | India</label>
              </div>
              <div
                className="col-md-4 col-sm-12 col-xs-12"
                Style="padding: 15px;"
              >
                <strong className="fs-5"> Contact </strong>
                <br />
                <label className="fs-7"> 7220857098 </label>
                <br />
                <label className="fs-7"> 1008520010 </label>
                <br />
                <label className="fs-7"> 1800-9090-5544 </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 col-xs-12">
          <h5 className="text-center">Let us get back to you</h5>
          <hr />
          <div>
            <br />
            <br />
            <div className="mb-3" Style="padding:5px">
              <h6>Name</h6>
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-3" Style="padding:5px">
              <h6>Email</h6>
              <input
                className="form-control"
                type="email"
                placeholder="you@gmail.com"
              />
            </div>
            <div className="mb-3" Style="padding:5px">
              <h6>Contact</h6>
              <input
                className="form-control"
                type="number"
                placeholder="Your mobile"
              />
            </div>
            <div className="mb-3" Style="padding:5px">
              <h6>What would you like to know?</h6>
              <textarea
                rows="3"
                className="form-control"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mb-3 text-center">
              <button type="button" className="btn btn-outline-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
