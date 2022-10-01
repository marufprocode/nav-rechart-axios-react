import React from 'react';
import Package from '../package/Package';

const Pricing = () => {
    const pricePackage = [
        {id:1, name: 'Free', price: 0, features: [
            'Awesome Feature',
            'Handsome Feature',
            'Osthir Feature',
            'Worst Feature',
            'Unnecessery Feature',
        ]},
        {id:2, name: 'Business', price: 12.99, features: [
            'Awesome Feature',
            'Handsome Feature',
            'Osthir Feature',
            'Worst Feature',
            'Unnecessery Feature',
        ]},
        {id:3, name: 'Premium', price: 30.99, features: [
            'Awesome Feature',
            'Handsome Feature',
            'Osthir Feature',
            'Worst Feature',
            'Unnecessery Feature',
        ]}
    ]
    return (
        <div>
            <h1 className='text-5xl font-semibold bg-indigo-300 py-5 my-3'>Best Deal Of The Year</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3'>
                {
                    pricePackage.map(pricePackage => <Package key={pricePackage.id} pricePackage={pricePackage}/>)
                }
            </div>
        </div>
    );
};

export default Pricing;