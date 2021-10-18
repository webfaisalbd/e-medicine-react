import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Delivery from '../Delivery/Delivery';


const Deliveries = () => {

    const [deliveries, setDeliveries] = useState([])
    useEffect(() => {
        fetch('deliveryMan.json')
            .then(res => res.json())
            .then(data => setDeliveries(data.slice(0,6)));
    }, [])
    return (
        <div>
            <h1>Our Delivery Heros</h1>
            <Row>
            {
                deliveries.map(delivery=> <Delivery
                    key={delivery.id}
                    delivery={delivery}
                ></Delivery>)
            }
        </Row>
        </div>
    );
};

export default Deliveries;