import React from 'react'
import ContactHome from '../components/ContactHome'
import Landing from '../components/LandingNewsPage'
import LandingHome from "../components/LandingHome"
import MainArticle from '../components/SectionNews'
import PopularPosts from '../components/popularPosts'
import SectionAboutHome from '../components/SectionAboutHome'
import SectionProjectsHome from '../components/SectionProjectsHome'
import SocialMedia from '../components/SocialMedia'
import TrendVideos from '../components/trendVideos'

function Home() {
    return (
        <div >
           <LandingHome/>
           <SectionAboutHome/>
        <SectionProjectsHome/>
   
        </div>
    )
}

export default Home
