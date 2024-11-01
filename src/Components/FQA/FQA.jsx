import React, { useState } from 'react';
import './FQA.css';
import fpic from '../../Assets/pic4.jpg';
import { FaSquareMinus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";

const FQA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const isActive = (index) => {
        return activeIndex === index;
    };

    return (
        <>
            <div className="fqaSection" >
                <div className="fqaImg">
                    <img src={fpic} alt="" />
                </div>

                <div className="fqaContent">
                    <small>FAQs</small>
                    <h3>Do you have <span>Questions</span> ?</h3>
                    <p>Feel free to ask any specific questions you have, and we'll be happy to provide answers!</p>

                    <div className="freqQuection">
                        <div className="accordion">
                            {[0, 1, 2, 3].map(index => (
                                <React.Fragment key={index}>
                                    <button
                                        className={`accordion-button ${isActive(index) ? 'active' : ''}`}
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                      What services do you offer?
                                        {isActive(index) ? <FaSquareMinus /> : <FaPlusSquare />}
                                    </button>
                                    <div className={`panel ${isActive(index) ? 'show' : ''}`}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FQA;
