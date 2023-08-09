import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className="container herosection-container">
            <div className="header">
                <h1><span>Blaager</span> - Unveil the Power of Words</h1>
            </div>
            <span>Dive into the Ultimate Platform of Expression! Join our blog website and unleash your creativity by sharing your thoughts, stories, and expertise through captivating articles. Ignite discussions, inspire minds, and become part of a vibrant community of wordsmiths.</span>

            <div className="searchbar">
                <img width="30" height="30" src="https://img.icons8.com/ios/30/search--v1.png" alt="search--v1" />
                <input type="text" placeholder='Search a blog' />
            </div>

            <Link to="/" className='link herSection-btn'>Get Started</Link>
        </div>
    )
}

export default HeroSection