import React from 'react';
import "../assets/css/LandingHome.css"
import picture from "../assets/media/ontj.jpg"
const LandingHome = () => {
    return (
        <div class="slider_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="full">
                        <div id="main_slider" class="carousel vert slide" data-ride="carousel" data-interval="5000">
                            <div class="carousel-inner"></div>
        <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="slider_cont">
                                                <h3>Discover Restaurants<br/>That deliver near You</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <a class="main_bt_border" href="#">Order Now</a>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="slider_image full text_align_center">
                                                <img class="img-responsive" src={picture} alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                
    );
};

export default LandingHome;