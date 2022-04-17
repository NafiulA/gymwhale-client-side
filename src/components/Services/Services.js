import React, { useContext } from 'react';
import { ServiceDataContext } from '../../hooks/ServiceDataContext';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    const { setSelectedService } = useContext(ServiceDataContext);
    const handleServicePurchase = (id) => {
        const selectedId = services.find(service => service.id === id)
        setSelectedService(selectedId);
    }
    return (
        <div id='services'>
            <h3 className='text-4xl md:text-5xl font-semibold text-center py-6'><span className='text-blue-900'>Services</span> I provide</h3>
            <div className='w-5/6 md:w-3/4 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service =>
                        <Service key={service.id} service={service} handleServicePurchase={handleServicePurchase} ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;