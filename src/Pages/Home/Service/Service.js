import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} className='w-100' alt="" />
            <h2>{name}</h2>
            <p>Description: <small>{description}</small></p>
            <p>Price: {price}</p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;