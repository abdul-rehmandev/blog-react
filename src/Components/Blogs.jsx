import React from 'react'
import Blog from './Blog'
import Recommend from './Recommend'

const Blogs = () => {
    return (
        <div className="container blogs-container">
            <div className="left">
                <div className="header">
                    <h3>Latest</h3>
                </div>
                <div className="blogs">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />

                    <div className="loadMore-btn">
                        <button>Load More</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="header">
                    <h3>Recommendations</h3>
                </div>
                <div className="recommends">
                    <Recommend />
                    <Recommend />
                    <Recommend />
                    <Recommend />
                    <Recommend />
                </div>
            </div>
        </div>
    )
}

export default Blogs