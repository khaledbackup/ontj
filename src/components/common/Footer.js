import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="widget">
                            <div class="footer-text text-left">
                                <h1 style = {{color:"white"}}>Ontj</h1>
                                {/* <a href="index.html"><img src="images/version/tech-footer-logo.png" alt="" class="img-fluid"/></a> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div class="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                                </div>

                                <hr class="invis"/>

                                <div class="newsletter-widget text-left">
                                    <form class="form-inline">
                                        <input type="text" class="form-control" placeholder="Enter your email address"/>
                                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">Popular Categories</h2>
                            <div class="link-widget">
                                <ul>
                                    <li><a href="#">Lorem ipsum<span>(21)</span></a></li>
                                    <li><a href="#">Lorem ipsum <span>(15)</span></a></li>
                                    <li><a href="#">Lorem ipsum <span>(31)</span></a></li>
                                    <li><a href="#">Lorem ipsum <span>(22)</span></a></li>
                                    <li><a href="#">Lorem ipsum <span>(66)</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">Copyrights</h2>
                            <div class="link-widget">
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Lorem ipsum</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 text-center">
                        <br/>
                        <div class="copyright">&copy; ONTJ. Design: <a href="http://html.design">HTML Design</a>.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;