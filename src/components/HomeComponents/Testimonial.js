import React from 'react'
import quote from '../../assets/icons/quote.svg';
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const patientData = [
        {
            id: 1,
            name: 'Winson Herry',
            img: img1,
            address: 'California'
        },
        {
            id: 2,
            name: 'Emily Mett',
            img: img2,
            address: 'New York'
        },

        {
            id: 3,
            name: 'Natilain hill',
            img: img3,
            address: 'Michigan'
        },
    ]

    return (
        <div className='mb-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-lg text-primary">Testimonial</h4>
                    <h2 className="text-3xl">What Our Patient Says</h2>
                </div>
                <img className='w-1/12' src={quote} alt="" />
            </div>

            <div className='lg:grid grid-cols-3 gap-6 mt-20'>
                {
                    patientData.map(patient => <TestimonialCard key={patient.id} patient={patient} />)
                }
            </div>
        </div>
    )
}

export default Testimonial