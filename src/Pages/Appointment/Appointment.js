import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointments from './AvailableAppointments'

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected} />
            <AvailableAppointments selected={selected} />
        </div>
    )
}

export default Appointment