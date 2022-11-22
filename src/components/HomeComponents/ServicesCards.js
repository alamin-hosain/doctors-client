import React from 'react'
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import ServicesCard from './ServicesCard';

const ServicesCards = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: teeth,
        }
    ]

    return (
        <>
            <div className='text-center pb-20'>
                <h3 className='text-xl font-semibold text-primary'>Our Services</h3>
                <h2 className='text-2xl font-bold mt-2'>Services We Provide</h2>
            </div>

            <div className='grid lg:grid-cols-3 gap-4 pb-32'>
                {
                    servicesData.map(service => <ServicesCard key={service.id} service={service} />)
                }
            </div>
        </>
    )
}

export default ServicesCards