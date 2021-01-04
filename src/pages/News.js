import React from 'react';

import SectionNews from '../components/SectionNews'
import PopularPosts from '../components/popularPosts'

import SocialMedia from '../components/SocialMedia'
import TrendVideos from '../components/trendVideos'
import LandingNewsPage from '../components/LandingNewsPage';

const News = () => {
    return (
        <section class="section">
             <LandingNewsPage/>
        <div class="container">
          <div class="row">
            
             <SectionNews/>
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
    );
};

export default News;