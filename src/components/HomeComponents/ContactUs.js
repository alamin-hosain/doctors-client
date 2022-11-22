import React from 'react'
import img from '../../assets/images/bgcontact.png';

const ContactUs = () => {
    return (
        <div className=' py-32 text-white' style={{ background: `url(${img})` }}>
            <h3 className="text-primary font-bold text-center">Contact Us</h3>
            <h2 className="text-3xl text-center mb-10">Stay Connected With Us</h2>
            <form action="" className='flex flex-col px-6 lg:px-0 md:w-3/5 lg:w-2/5 mx-auto space-y-4'>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full " />
                <input type="text" name='subject' placeholder="Subject" className="input input-bordered w-full " />
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                <input className=' bg-gradient-to-r from-primary to-secondary py-3 text-lg rounded-lg w-1/2 mx-auto cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactUs