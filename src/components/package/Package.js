import React from "react";
import Feature from "../feature/Feature";

const Package = ({ pricePackage }) => {
  const { name, price, features } = pricePackage;
  return (
    <div className="bg-indigo-300 rounded-lg py-5">
        <div>
                <h2>
                <span className="text-5xl font-bold text-white">{price}</span>
                <span className="text-2xl text-white">/Mon</span>
                </h2>
                <p className="text-3xl">{name}</p>
        </div>
        {
            features.map((feature, idx) => <Feature key={idx} feature={feature}/>)
        }        
    </div>
  );
};

export default Package;
