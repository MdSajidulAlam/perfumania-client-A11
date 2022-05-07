import { faBottleDroplet, faFireFlameCurved, faMoneyBill, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ItemsSummary.css'
import CountUp from 'react-countup';

const ItemsSummary = () => {
    return (
        <div className='d-flex justify-content-center align-items-center items-summary'>
            <div className='p-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className=' font-icon text-white' icon={faBottleDroplet}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>2,000</h1>
                <p className='text-white text-center'>Perfume Delivered</p>
            </div>
            <div className='p-5'>
                <div className='d-flex justify-content-center align-items-center' >
                    <FontAwesomeIcon className=' font-icon text-white' icon={faMoneyBill}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>2,000</h1>
                <p className='text-white text-center'>Amount Sold</p>

            </div>
            <div className='p-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className=' font-icon text-white' icon={faUsers}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>2,000</h1>
                <p className='text-white text-center'>Customer Satisfaction</p>
            </div>
            <div className='p-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className=' font-icon text-white' icon={faFireFlameCurved}></FontAwesomeIcon>
                </div>
                <h1 className='text-center text-white'>10+ products</h1>
                <p className='text-center text-white'>Hot Deals</p>
            </div>

        </div>
    );
};

export default ItemsSummary;