import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import ContactUs from '../components/HomeComponents/ContactUs';
import DentalCare from '../components/HomeComponents/DentalCare';
import InfoCards from '../components/HomeComponents/InfoCards';
import MakeAppointment from '../components/HomeComponents/MakeAppointment';
import ServicesCards from '../components/HomeComponents/ServicesCards';
import Testimonial from '../components/HomeComponents/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServicesCards />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;