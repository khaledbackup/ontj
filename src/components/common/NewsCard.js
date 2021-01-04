import React from 'react';
import { Link } from 'react-router-dom';
const NewsCard = (props) => {
    const{NewsData}=props;

    return (
        <div>
       <Link to={`/moreInformations`}> <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="/moreInfo" title="">
                                                <img src={NewsData.picture} alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="blog-meta big-meta col-md-8">
                                        <h4><a href="tech-single.html" title="">{NewsData.title}</a></h4>
                                        <p>{NewsData.description}</p>
                                        <small class="firstsmall"><a class="bg-orange" href="tech-category-01.html" title="">Gadgets</a></small>
                                        <small><a href="tech-single.html" title="">{NewsData.date}</a></small>
                                        <small><a href="tech-author.html" title="">{NewsData.author}</a></small>
                                        <small><a href="tech-single.html" title=""><i class="fa fa-eye"></i> {NewsData.vue}</a></small>
                                    </div>
                                </div>

                                <hr class="invis"/>
                                </Link>
                                </div>
    );
};

export default NewsCard;