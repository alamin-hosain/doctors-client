import React, { useContext } from 'react'
import { format } from 'date-fns';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const appointmentDate = format(selected, 'PP')
    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate,
            treatment: name,
            patient,
            slot,
            email,
            phone,
            price,

        }

        fetch('https://doctor-server-six.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);  // send data to the sever and close the modal
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={appointmentDate} disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your name" className="input input-bordered w-full " required disabled />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " required disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input className='w-full btn btn-accent text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModal