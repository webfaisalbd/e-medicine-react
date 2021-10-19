import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();


const [serviceDetails,setServiceDetails]=useState([])

useEffect(()=>{
    fetch('/services.json')
    .then(res=>res.json())
    .then(data=>setServiceDetails(data))
},[])

const foundDetails= serviceDetails.find(singleService=>singleService.id===Number(serviceId))
//  console.log(foundDetails);


    return (
        <div>
            <p> {foundDetails?.name} </p>
            <p> {foundDetails?.description} </p>
            
        </div>
    );
};

export default Booking;