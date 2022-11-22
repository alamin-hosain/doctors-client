import React from 'react'

const TestimonialCard = ({ patient }) => {
    const { name, img, address } = patient;

    return (
        <div className='shadow-lg p-8 mb-10 rounded-xl'>
            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className='flex items-center mt-6'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='ml-6'>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard