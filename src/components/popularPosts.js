import React from 'react'
import PopularCard from './common/PopularCard'


function PopularPosts() {
    return (
        <div class="widget">
             <h2 class="widget-title">Popular Posts</h2>
                <div class="blog-list-widget">
                    <div class="list-group">
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                        <PopularCard/>
                    </div>
                </div>
        </div>
        
    )
}

export default PopularPosts
