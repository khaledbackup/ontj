import React from 'react';
import  '../assets/css/video-bg-section.css'
import LandingCardLg from './common/LandingCardLg';
import LandingCardSm from './common/LandingCardSm';

const LandingNewsPage = () => {
    return (
        <div id="video-bg-section">
        
                    {/* <source src="../assets/media/main-video.mp4" type="video/mp4"/> */}
            <iframe  id="video"  width="560" height="315" src="https://www.youtube.com/embed/cmf8DA-10Sk?autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
                   

            <section class=" first-section" >
            <div class="container-fluid">
                <div class="masonry-blog clearfix">
                    <LandingCardLg/>
                    <LandingCardSm/>
                    <LandingCardSm/>  

                </div>
            </div>
            </section>
        </div>
        
    );
};

export default LandingNewsPage;