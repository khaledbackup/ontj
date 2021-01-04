import React from "react";

import ProjectCard from "../components/common/ProjectCard";
import PopularPosts from "../components/popularPosts";
import SocialMedia from "../components/SocialMedia";
import TrendVideos from "../components/trendVideos";
import { projects } from "../assets/data/projects";
function Projetcs() {
  return (
    <section class="section" style={{ marginTop: "30px" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div class="sidebar">
              <TrendVideos />
              <PopularPosts />
              <SocialMedia />
            </div>
          </div>
          <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div class="page-wrapper">
              <div class="blog-grid-system">
                <div class="row">
                  {projects.map((el) => (
                    <div class="col-md-6">
                      <ProjectCard dataproject={el} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetcs;
