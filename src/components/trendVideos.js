import React from 'react'
import VideoCard from './common/videoCard'

function TrendVideos() {
    return (
        <div class="widget">
            <h2 class="widget-title">Trend Videos</h2>
                <div class="trend-videos">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    
                </div>
       
        </div>


        
    )
}

export default TrendVideos
