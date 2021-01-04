import React from 'react'

function ProjectCard(props) {
    const {dataproject}=props
    return (
       
            <div class="blog-box">
                <div class="post-media">
                    <a href="tech-single.html" title="">
                        <img src="upload/tech_menu_01.jpg" alt="" class="img-fluid"/>
                        <div class="hovereffect">
                            <span></span>
                        </div>
                    </a>
                </div>
                <div class="blog-meta big-meta">
                    <span class="color-orange"><a href="tech-category-01.html" title="">Gadgets</a></span>
                    <h4><a href="tech-single.html" title="">{dataproject.title}</a></h4>
                    <p>{dataproject.description}</p>
                    <small><a href="tech-single.html" title="">{dataproject.date}</a></small>
                    <small><a href="tech-author.html" title="">{dataproject.author}</a></small>
                    <small><a href="tech-single.html" title=""><i class="fa fa-eye"></i> {dataproject.vue}</a></small>
                </div>
            </div>
       
    )
}

export default ProjectCard
