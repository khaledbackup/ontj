import React from 'react';
import ArticleInformation from '../components/ArticleInformation';
import MainArticle from '../components/SectionNews';
import PopularPosts from '../components/popularPosts';
import SocialMedia from '../components/SocialMedia';
import TrendVideos from '../components/trendVideos';
//DATA

import {news} from "../assets/data/news"
import { useParams } from 'react-router';

const MoreInformation = ({match}) => {
//     //get id from link
//     const id  = match.params.id
//    // get specifique data
//   const ArticleData= news.filter(el=>el.id==id)[0]
  
    return (
        <div >
            
       
    <section class="section">
  <div class="container">
    <div class="row">
    <ArticleInformation/>
       
        {/* sidebar */}
        <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div class="sidebar">
                
                <TrendVideos/>
                <PopularPosts/>
                <SocialMedia/>
            </div>
        </div>
        </div>
  </div>
</section>
    </div>
    );
};

export default MoreInformation;