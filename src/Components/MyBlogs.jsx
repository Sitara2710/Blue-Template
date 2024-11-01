import React from 'react'
import banner from '../Assets/Blog.png'
import Blog from './Blog/Blog'
const MyBlogs = () => {
    return (
        <>
            <div className="blog" style={{ width: '100%' ,background:'skyblue'}}>
                <img src={banner} alt="s" style={{ width: '100%' }} />
            </div>
            <Blog />
        </>
    )
}

export default MyBlogs