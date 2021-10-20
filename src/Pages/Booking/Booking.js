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

            <div class="card text-center">

                     <div class="card-header">
                        <img src={foundDetails?.img} alt="" />
                     </div>

                    <div class="card-body text-info">
                         <h5 class="card-title">Product Name: {foundDetails?.name} </h5>
                         <p class="card-text"><span className="fw-bold">Price:</span> {foundDetails?.price}tk</p>
                         <p class="card-text"><span className="fw-bold">Brand:</span> {foundDetails?.brand}</p>
                         <p class="card-text"><span className="fw-bold">Indications::</span> {foundDetails?.description}</p>
                         <p class="card-text"><span className="fw-bold">Dosage:</span> {foundDetails?.dosage}</p>
                         <button className="btn btn-regular bg-success">Confirm Order</button>

  </div>
  
</div>
            
        </div>
    );
};

export default Booking;