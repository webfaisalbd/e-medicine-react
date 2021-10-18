import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <p>this is booking: {serviceId} </p>
            <p>{serviceId.img}</p>
        </div>
    );
};

export default Booking;