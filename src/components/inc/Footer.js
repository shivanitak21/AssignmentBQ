import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <section className= "bg-dark text-white py-5">
             <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Company Info</h6>
                            <hr/>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                       incididunt ut labore et dolore ."</p>
                        </div>
                        <div className="col-md-4">
                            <h6> Links </h6>
                            <hr/>
                            <div><Link to="/" className="text-decoration-none">Our Clients</Link></div>
                            <div><Link to="/about" className="text-decoration-none">Privacy Policy</Link></div>
                            <div><Link to="/contact" className="text-decoration-none">Our Benefits</Link></div>
                            
                        </div>
                        <div className="col-md-4">
                            <h6> Information </h6>
                            <hr/>
                            <div><Link to="/" className="text-decoration-none">Our Clients</Link></div>
                            <div><Link to="/about" className="text-decoration-none">Privacy Policy</Link></div>
                            <div><Link to="/contact" className="text-decoration-none">Our Benefits</Link></div>
                            
                        </div>
                        <div className="col-md-4">
                            <hr/>
                            <h6>Contact Us </h6>
                            <div><p>+91 971999770, +1 833-880-3355</p></div>
                            <div><p>info@bytequests.com</p></div>
                            <div><p>84,Block A ,Sector 4 Noida,UP,210301</p></div>
                        </div>
                        <div>
                        <hr/>
                            <p><center>Copyright 2020 ByteQuest Software Private Limited . All Rights Reserved</center></p>
                        </div>
                    </div>
            </div>
        </section>
     
    )
}


export default Footer;