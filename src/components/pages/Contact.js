import React from "react";
import Footer from "../inc/Footer";


class Contact extends React.Component {
  render() {
    return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28568.39019277727!2d74.6520576!3d26.4863744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be710a6295d19%3A0x17da9f02930d903b!2sHazrat%20Khwaja%20Gharib%20Nawaz%20Dargah!5e0!3m2!1sen!2sin!4v1641625048535!5m2!1sen!2sin"
                width="100%"
                height="450"
                title="mytitle"
                allowfullscreen=""
                loading="lazy"
              >
                {" "}
              </iframe>{" "}
            </div>{" "}
            <div className="col-md-4">
              <h4> Send your idea </h4> <div className="underline mb-3"> </div>{" "}
              <form>
                <label for=""> Name </label>{" "}
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="form-control"
                />
                <label for=""> Email </label>{" "}
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="form-control"
                />
                <label for=""> Message </label>{" "}
                <textarea rows="3" className="form-control">
                  {" "}
                </textarea>{" "}
              </form>{" "}
            </div>
          </div>
        </div>{" "}
      </section>
      <Footer/>
    </div>
    );
  }
}
export default Contact;
