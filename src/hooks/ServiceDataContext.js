import { createContext, useState } from "react";

const ServiceDataContext = createContext({});

const ServiceDataContextProvider = ({ children }) => {
    const [selectedService, setSelectedService] = useState({});

    return (
        <ServiceDataContext.Provider value={{ selectedService, setSelectedService }}>
            {children}
        </ServiceDataContext.Provider>
    );
};

export { ServiceDataContext, ServiceDataContextProvider };