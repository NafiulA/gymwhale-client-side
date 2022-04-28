import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data.name);
        console.log(data.email);
        console.log(data.message);
    }
    const position = [51.505, -0.09];

    if (errors.name || errors.email || errors.message) {
        if (errors?.name) {
            toast(`${errors.name.type}`, { id: "nameError" });
        }
        if (errors?.email) {
            toast(`${errors.email.type}`, { id: "emailError" });
        }
        if (errors?.message) {
            if (errors.message.type === "required") {
                errors.message.message = "Message is required"
            }
            if (errors.message.type === "maxLength") {
                errors.message.message = "Max length is 200 charachters"
            }
            toast(`${errors.message.message}`, { id: "messageError" });
        }
    }
    return (
        <div className='min-h-[700px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Get In Touch</h3>
                    <form className='flex flex-col w-3/5 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <label className='py-2 text-lg' htmlFor="name">Name</label>
                        <input className='border-2 border-blue-800 rounded-lg p-2 text-lg' id='name' {...register("name", { required: true, maxLength: 20 })} />
                        <label className='py-2 text-lg' htmlFor="email">E-mail</label>
                        <input className='border-2 border-blue-800 rounded-lg p-2 text-lg' id='email' {...register("email", { pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })} />
                        <label className='py-2 text-lg' htmlFor="message">Message</label>
                        <textarea rows="4" className='border-2 border-blue-800 rounded-lg p-2 text-lg focus:border-black' id='message' type="text" {...register("message", { required: true, maxLength: 200 })} />
                        <input className='mt-2 py-2 w-1/6 rounded-lg bg-blue-900 text-white hover:bg-blue-800' type="submit" />
                    </form>
                </div>
                <div>
                    <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Maps and Direction</h3>
                    <div className='mx-auto py-2' style={{ width: "80%", height: "100%" }}>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    GymWhale
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;