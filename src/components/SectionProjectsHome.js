import React from 'react';
import {projects} from "../assets/data/projects"
//components
import ProjectCard from "./common/ProjectCard"
const SectionProjectsHome = () => {

    //data
    const size = 3
const items = projects.slice(0, size)
    return (
        <div class="container">
        <div class="page-wrapper">
          <div class="blog-top clearfix">
            <h4 class="pull-left">
              Recent News{" "}
              <a href="#">
                <i class="fa fa-rss"></i>
              </a>
            </h4>
          </div>

          <div   >
          <div class="row " >
            {items.map(el=><div class="col-md-4 " >
            <ProjectCard dataproject={el}/>
            </div>
            )}
          </div>
          </div>
        </div>
      </div>
    );
};

export default SectionProjectsHome;