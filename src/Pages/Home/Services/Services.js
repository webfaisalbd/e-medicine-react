import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,3)));
    }, [])

    return (
        <div>
            <h2>Our Top Products</h2>

            <Row>
            {
                services.map(service=> <Service 
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </Row>
      
  </div>

    );
};

export default Services;