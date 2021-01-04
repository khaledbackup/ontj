import React from "react";
import NewsCard from "./common/NewsCard";

//data
import {news} from "../assets/data/news"
const SectionNews = () => {
  
  return (
    
          <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div class="page-wrapper">
              <div class="blog-top clearfix">
                <h4 class="pull-left">
                  Recent News{" "}
                  <a href="#">
                    <i class="fa fa-rss"></i>
                  </a>
                </h4>
              </div>

              <div class="blog-list clearfix">
                {news.map(el=><NewsCard NewsData={el}/>)}
              
              </div>
            </div>
          </div>
       
  );
};

export default SectionNews;
