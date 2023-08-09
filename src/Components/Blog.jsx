import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'

const Blog = () => {
    return (
        <div className="blog-box">
            <Link to="/" className='link'>
                <div className="imageSection">
                    <img src="/Images/post1.jpg" alt="blog" />
                    <Tag title="Trending" />
                </div>
                <div className="titleSection">
                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, non?</h3>
                </div>
                <div className="detailsSection">
                    <div className="left">
                        <div className="creatorName">
                            <span>Lorem, ipsum.</span>
                        </div>
                        <div className="postingDate">
                            Aug 8, 2023
                        </div>
                    </div>
                    <div className="right">
                        <div className="views">
                            <img width="20" height="20" src="https://img.icons8.com/material-sharp/20/visible.png" alt="visible" /> 126
                        </div>
                        <div className="comments">
                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/speech-bubble--v1.png" alt="speech-bubble--v1" /> 24
                        </div>
                    </div>
                </div>
                <hr />
                <div className="descriptionSection">
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quae itaque labore. Molestiae optio incidunt dicta quidem voluptate laudantium quod! ...</span>
                </div>
            </Link>
        </div>
    )
}

export default Blog