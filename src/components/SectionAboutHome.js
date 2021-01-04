import React from 'react';
//css
import "../assets/css/SectionAboutHome.css"
//animation module
import {useSpring, animated} from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SectionAboutHome = () => {
 
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
      
        <section>
        <div class="bg_bg">
        <div class="about">
    <div class="container">
    
      <div class="row">
         <div class="col-md-12">
             <div class="title">
                <i><img src="images/title.png" alt="#"/></i>
                <h2>About Our Lorem Ipsum</h2>
                <span>It is a long established fact that a reader will be distracted by the readable content of a
                   <br/> page when looking at its layout. The point of using Lorem
                </span>
             </div>
          </div>
       </div>
       <animated.div
      className="AnimatedBox"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
       <div class="row">
         <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
             <div class="about_box">
                 <h3>Lorem Ipsum</h3>
                 <p>ONTJ is a youth organization that focuses on  
 three major fields sociocultural, politics and development including widening the spirit of entrepreneurship among all the citizens, youth in particular </p>
                 <a href="#">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
             </div>
         </div>
          <div class="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
             <div class="about_img">
                 <figure><img src="images/about-img.jpg" alt="#/"/></figure>
                 
             </div>
         </div>      
       </div> 
       </animated.div>
     
    </div>
</div>
</div>




<div class="Client ">
  <div class="container">
  
    <div class="row">
      <div class="col-md-12">
        <div class="title">
          <i><img src="images/title.png" alt="#"/></i>
          <h2>Our Lorem</h2>
        </div>
      </div>
    </div>
    <animated.div
      className="AnimatedBox"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
    <div class="row">
      <div class="col-md-6 offset-md-3">
         <div class="Client_box">
           <img src="images/client.jpg" alt="#"/>
           <h3>Lorem Ipsum</h3>
           <p>ONTJ is a youth organization that focuses on  
 three major fields sociocultural, politics and development including widening the spirit of entrepreneurship among all the citizens, youth in particular </p>
           <i><img src="images/client_icon.png" alt="#"/></i>
         </div>
      </div>
    </div>
    </animated.div>
  </div>
</div>  

</section>
    );
};

export default SectionAboutHome;