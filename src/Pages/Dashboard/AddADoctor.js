import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddADoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-server-six.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddADoctor = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=5b9f70dc7c3ebb1cfe24ce432452613c`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    console.log(doctor)
                    fetch('https://doctor-server-six.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }

    if (isLoading) {
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            </div>
        </div>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddADoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register('name')} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-700 py-2'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email', { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-700 py-2'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>

                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }

                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register('img')} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-700 py-2'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full my-3' type="submit" value='Add A Doctor' />
                {/* {
                    signupError && <p className='text-red-600 py-3'>{signupError}</p>
                } */}
            </form>
        </div>
    )
}

export default AddADoctor