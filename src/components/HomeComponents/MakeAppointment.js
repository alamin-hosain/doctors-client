import React from 'react'
import img from '../../assets/images/doctor.png'
import Button from '../../utilis/Button'
import bg from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div className='mt-52 mb-20 lg:grid grid-cols-2 text-white' style={{ background: `url(${bg})` }}>
            <div className='-mt-32 hidden lg:flex'>
                <img src={img} alt="" />
            </div>
            <div className='space-y-4 lg:flex lg:flex-col justify-center p-6 lg:p-0 lg:pr-6'>
                <p className="text-lg text-primary font-semibold">Appointment</p>
                <h3 className="text-3xl">Make an appointment Today</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div><Button>{'Get Started'}</Button></div>
            </div>
        </div>
    )
}

export default MakeAppointment