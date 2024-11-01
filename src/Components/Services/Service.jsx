import React from 'react'
import './Service.css'
import { FaBuysellads } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import ServiceBox from './ServiceBox';

const Service = () => {
    return (
        <>
            <div className="serviceContainer mt-5" >
                <h1>Our Professional <span>Services</span></h1>

                <div className="service_box">
                    <ServiceBox icon={<FaBuysellads />} title={'Ads Management'} desc={'Our Ads Management services offer a comprehensive solution tailored to your brands unique needs. With over two decades of experience'} />
                    <ServiceBox icon={<RiCustomerService2Fill />} title={'Video Marketing'} desc={'Elevate your brands presence and drive results with our comprehensive Video Marketing solutions Lets bring your vision to life on screen'} />
                    <ServiceBox icon={<FaBuysellads />} title={'Customer Relation'} desc={' Elevate your customer relations strategy with us and watch your brand flourish through genuine connections and lasting relationships.'} />
                    <ServiceBox icon={<RiCustomerService2Fill />} title={'Product Outreach'} desc={' Our Product Outreach solutions are designed to amplify your message, engage your audience, and generate meaningful interactions that lead to conversion.'} />
                    <ServiceBox icon={<FaBuysellads />} title={'PR Campaign'} desc={'In todays fast-paced digital landscape shaping public perception is paramount to your brands success. Our PR Campaigns are meticulously crafted to elevate your brands.'} />
                    <ServiceBox icon={<RiCustomerService2Fill />} title={'Product Expansion'} desc={'In a world of constant evolution, staying ahead requires bold steps towards growth and innovation. Our Product Expansion initiatives are designed to unlock new opportunities'} />

                </div>



            </div>

        </>
    )
}

export default Service