import React from 'react'
import { Link } from 'react-router-dom'

const Recommend = () => {
    return (
        <div className="recommend-box">
            <Link to="/" className='link'>
                <div className="imageSection">
                    <img src="/Images/post1.jpg" alt="logo" />
                </div>
                <div className="details">
                    <div className="title">
                        <h6>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h6>
                    </div>
                    <div className="date">
                        Aug 8, 2023
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Recommend