import React from 'react';
import Mv from '../pages/includes/Mv';
import Footer from '../inc/Footer';

function Contact(){
    return(
        <div>
            <section className ="py-4 text-center bg-primary">
                  <h2 className ="text-white"> About Us </h2>  
            </section>
            <section className ="py-5">
                    <div className="container">
                            <div className="row">
                                    <div className="col-md-12">
                                       <h4>About Our Company</h4>
                                       <div className="underline mb-3"></div>
                                       <p>
                                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                       exercitation ullamco laboris ninim id est laborum."
                                       </p>
                                       <p>
                                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                       incididunt ut labore et dolor
                                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                                       </p>
                                    </div>
                            </div>
                            
                    </div>
            </section>
               <Mv/>
               <Footer/>
        </div>
    )    
}

export default Contact;