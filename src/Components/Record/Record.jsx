import React from 'react'
import './Record.css'
import handPic from '../../Assets/illu.png'

const Record = () => {
    return (
        <>
            <div className="records-container "
                >
                <div className="img">
                    <img src={handPic} alt="" />
                </div>

                <div className="recordCaption">
                    <small>our track record</small>
                    <h3>We have been doing this seen <span>1999</span>.</h3>
                    <p>For over two decades, our unwavering commitment to excellence has been the cornerstone of our journey since our inception in 1999. With each passing year, we've embraced challenges, celebrated milestones,
                        and evolved with the ever-changing landscape of our industry.</p>


                    <div className="recordViews">
                        <div className="oneReviws">
                            <p>2234+</p>
                            <small>clients</small>
                        </div>
                        <div className="oneReviws">
                            <p>234+</p>
                            <small>projects</small>
                        </div>
                        <div className="oneReviws">
                            <p>150+</p>
                            <small>awards</small>
                        </div>
                    </div>

                    <button>learn more</button>
                </div>
            </div>

        </>
    )
}

export default Record