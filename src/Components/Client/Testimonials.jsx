import React from 'react'
import './Testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import pic from '../../Assets/apply.png';
import pic2 from '../../Assets/userPic.jpg'
import pic3 from '../../Assets/userPic.jpg';

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic,
            desti: "professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic2,
            desti: "professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic3,
            desti: "professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic,
            desti: "professional"

        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic2,
            desti: "professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic3,
            desti: "professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic2,
            desti: "professional"
        }
    ];
    return (
        <>

            <div className="Casousal" >
                <div className="clientHeading">
                    <h3 style={{ color: "#6415ff"}}><span style={{ color: "#243e7c"}}>what they </span> <br />saying about us</h3>
                    <p>consectetur adipisicing elit. Maxime, adipisci?</p>
                </div>
                <Slider {...settings}>
                    {
                        data.map((item) => (
                            <div class="MainBox">

                                <div class="Content">
                                  
                                    <div className="caraousalImgSection">
                                        <img src={item.img} alt="" style={{aspectRatio:"3/2",height:"100px",width:"120px"}} />

                                        <div className="caption">
                                            <h5>{item.name}</h5>
                                            <small>{item.desti}</small>
                                        </div>
                                    </div>
                                    <div class="subTitle">
                                        <p>
                                            {item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }




                </Slider>
            </div>
        </>
    )
}

export default Testimonials