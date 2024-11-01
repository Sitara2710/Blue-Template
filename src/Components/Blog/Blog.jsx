import React from 'react'
import './Blog.css'
import pic from '../../Assets/pic.jpg'
import { FaBuysellads } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
const Blog = () => {
    return (
        <>
            <div className="blogSection" >
                <small>blog</small>
                <h3>We Love <span>Writing</span> .</h3>
                <p style={{ textAlign: "center" }}>Some amazing blog posts that are written by even more amazing people.</p>

                <div className="blogCard">
                    <div className="blogCardDetails">
                        <img src={pic} alt="Blog Post" />
                        <div className="blogWrap">
                            <div className="blogIcon">
                                <p><FaBuysellads />Adam Wathan</p>
                                <p><RiCustomerService2Fill />seo</p>
                            </div>
                            <h3>Optimizing your website for your main keyword</h3>
                            <p>Identify the main keyword or keywords that best represent your business, products, or services. </p>
                            <button>Read Post</button>
                        </div>

                    </div>

                    <div className="blogCardDetails">
                        <img src={pic} alt="Blog Post" />
                        <div className="blogWrap">
                            <div className="blogIcon">
                                <p><FaBuysellads />Adam Wathan</p>
                                <p><RiCustomerService2Fill />seo</p>
                            </div>
                            <h3>Efficient management of your social media assets</h3>
                            <p>Create a centralized content calendar to plan and schedule your social media posts in advance.</p>
                            <button>Read Post</button>
                        </div>
                    </div>

                    <div className="blogCardDetails">
                        <img src={pic} alt="Blog Post" />
                        <div className="blogWrap">
                            <div className="blogIcon">
                                <p><FaBuysellads />Adam Wathan</p>
                                <p><RiCustomerService2Fill />seo</p>
                            </div>
                            <h3>Creating The perfect advertisement campaign</h3>
                            <p>Conduct thorough market research to understand your target  and pain points. </p>
                            <button>Read Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog