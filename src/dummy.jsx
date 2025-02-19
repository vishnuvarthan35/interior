import React from "react";

export default function Demo() {
    return (
        <>
  <>
  {/*Inner Heading Start*/}
  <div className="inner-heading">
    <div className="container">
      <h1>Contact Us</h1>
    </div>
  </div>
  {/*Inner Heading End*/}
  {/*Inner Content Start*/}
  <div className="inner-content">
    <div className="container">
      {/*Contact Start*/}
      <div className="contact-wrap">
        <div className="title-box">
          <h2>Have Any Questions?</h2>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
            vestibulum elit, at hendrerit diam. Aenean placerat dolor ut ante
            commodo posuere.
          </div>
        </div>
        <div className="default-form contact-form">
          <form>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="input-group">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="input-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Massage"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="input-group submitbtn">
                  <input
                    type="submit"
                    className="sub"
                    defaultValue="Send Massage"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <section className="xs-contact-infomation xs-contact-info-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  {" "}
                  <i className="fa fa-map" aria-hidden="true" />
                  <h4>Visit our office</h4>
                  <span>1234 Lorem Road, ISpum A Kennesaw, GA 1234</span>{" "}
                </div>
                {/* .contact-info-group END */}
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  {" "}
                  <i className="fa fa-envelope-open" aria-hidden="true" />
                  <h4>Mail us</h4>
                  <a href="#">info@compnay.com</a>{" "}
                </div>
                {/* .contact-info-group END */}
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="contact-info-group">
                  {" "}
                  <i
                    className="fa fa-volume-control-phone"
                    aria-hidden="true"
                  />
                  <h4>Call us</h4>
                  <span>(777) 123-4567</span>{" "}
                </div>
                {/* .contact-info-group END */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*Contact End*/}
    </div>
  </div>
  {/*Inner Content End*/}
</>

</>

    );
}
