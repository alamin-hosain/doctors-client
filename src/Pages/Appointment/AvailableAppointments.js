import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import AvailableAppointmentOption from './AvailableAppointmentOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selected, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-server-six.vercel.app/v2/appointments?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='mb-20'>
            <p className="text-primary text-center text-lg">You have selected date: {format(selected, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions?.map(option => <AvailableAppointmentOption key={option._id} option={option} setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment &&
                <BookingModal refetch={refetch} treatment={treatment} setTreatment={setTreatment} selected={selected}></BookingModal>
            }
        </section>
    )
}

export default AvailableAppointments;