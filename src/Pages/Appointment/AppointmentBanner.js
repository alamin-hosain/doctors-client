import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selected, setSelected }) => {


    return (
        <div className="hero py-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl mb-10" alt='' />
                <div className='lg:mr-20 border border-emerald-200 p-6'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>

            </div>
        </div>
    )
}

export default AppointmentBanner