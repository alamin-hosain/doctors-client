import React from 'react'

const AvailableAppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
            <div className="card-body text-center space-y-2">
                <h2 className=" text-2xl text-primary text-center font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(option)} htmlFor="bookingModal" className="btn btn-primary text-lg">Book Appointment</label>
                </div>
            </div>

        </div>
    )
}

export default AvailableAppointmentOption