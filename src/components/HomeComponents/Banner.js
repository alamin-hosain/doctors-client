import React from 'react';
import chair from '../../assets/images/chair.png';
import Button from '../../utilis/Button';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero py-32" style={{ background: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>{'Get Started'}</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;