import React, { useContext } from 'react';
import { ServiceDataContext } from '../../hooks/ServiceDataContext';

const Checkout = () => {
    const { selectedService } = useContext(ServiceDataContext)
    const { name, description } = selectedService;
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default Checkout;