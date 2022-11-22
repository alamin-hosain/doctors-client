import React from 'react'
import img from '../../assets/images/treatment.png'
const DentalCare = () => {
    return (
        <div className="card lg:flex lg:flex-row bg-base-100 lg:px-32 mb-32">
            <figure className='w-full lg:w-1/2 mb-6 lg:mb-0'><img src={img} alt="Album" /></figure>
            <div className="w-full lg:w-1/2 space-y-6 lg:ml-8 lg:flex lg:flex-col lg:justify-center">
                <h2 className="card-title text-3xl">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white text-lg">GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default DentalCare