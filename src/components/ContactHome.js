import React from 'react';
//css
import "../assets/css/ContactHome.css"
const ContactHome = () => {
    return (
        <div class="ContactHome">
        <div class="container-fluid">
            <div class="row">
              <div class=" col-md-12">
                <h2>Request  A<strong class="white"> Call  Back</strong></h2>
              </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  
                    <form class="main_form">
                        <div class="row">
                         
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input class="formControl" placeholder="Name" type="text" name="Name"/>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input class="formControl" placeholder="Email" type="text" name="Email"/>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input class="formControl" placeholder="Phone" type="text" name="Phone"/>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <textarea class="textarea" placeholder="Message" type="text" name="Message"></textarea>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <button class="send">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="img-box">
                        <figure><img src="images/img.jpg" alt="img" /></figure>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default ContactHome;