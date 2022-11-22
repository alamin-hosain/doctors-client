import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom'
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();

    const { treatment, price, appointmentDate, slot } = booking;

    // if (navigation.state === 'loading') {
    //     return <div className="flex justify-center items-center">
    //         <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    //         </div>
    //     </div>
    // }

    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please Pay <strong>${price}</strong> for Yor Appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-8'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements>
            </div>
        </div>
    )
}

export default Payment