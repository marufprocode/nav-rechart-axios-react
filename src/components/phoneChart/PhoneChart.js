import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const PhoneChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => {
        const loadedPhones = res.data.data.map(phones=>{
            const parts = phones.slug.split('-');
            const phonesData = {
                brand: phones.brand,
                name: phones.phone_name,
                price: parts[1]
            }; 
            return phonesData;
        })
        setPhones(loadedPhones);
    });
  }, []);
  if (!phones) return null;
  return (
        <div>
            <BarChart 
            width={600}
            height={300}
            data={phones}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 50,
            }}
            >
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>
        </div>
  );
};

export default PhoneChart;
