import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name) return "Name is required.";
    if (!formData.mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Invalid email format.";
    if (!formData.message) return "Message is required.";
    return null; // Validation passed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.17:3001/create/registermod", // Replace with your backend's actual URL
        formData
      );
      console.log("Response from server:", response.data);
      toast.success("Form submitted successfully!");
      setFormData({ name: "", mail: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        // Backend response errors
        toast.error(
          error.response.data.message ||
          `Error ${error.response.status}: Unable to submit form.`
        );
      } else if (error.request) {
        // No response from server
        toast.error("No response received from the server.");
      } else if (error.code === 'ERR_NETWORK') {
        // Network error handling
        toast.error("Network error: Unable to reach the server. Please check your connection.");
      } else {
        // Other errors
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <div className="inner-heading">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="inner-content">
        <div className="container">
          <div className="contact-wrap">
            <div className="title-box">
              <h2>Have Any Questions?</h2>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                vestibulum elit, at hendrerit diam.
              </div>
            </div>
            <div className="default-form contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="input-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="input-group">
                      <input
                        type="email"
                        name="mail"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.mail}
                        onChange={handleChange}
                        required
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
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="input-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="input-group submitbtn">
                      <button type="submit" className="sub">
                        Send Message
                      </button>
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
                      <i className="fa fa-map" aria-hidden="true"></i>
                      <h4>Visit our office</h4>
                      <span>1234 Lorem Road, ISpum A Kennesaw, GA 1234</span>
                    </div>
                    {/* .contact-info-group END */}
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="contact-info-group">
                      <i className="fa fa-envelope-open" aria-hidden="true"></i>
                      <h4>Mail us</h4>
                      <a href="#">info@compnay.com</a>
                    </div>
                    {/* .contact-info-group END */}
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="contact-info-group">
                      <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                      <h4>Call us</h4>
                      <span>(777) 123-4567</span>
                    </div>
                    {/* .contact-info-group END */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
