import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Blogs from '../Components/Blogs'

const Homepage = () => {
    return (
        <>
            <Navbar NavLink={1} />
            <HeroSection />
            <Blogs />
        </>
    )
}

export default Homepage