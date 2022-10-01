import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
  return (
    <div>
      <div className="flex items-center ml-4">
        <CheckCircleIcon className="h-4 w-4 text-gray-800" />
        <p className="ml-2">{feature}</p>
      </div>
    </div>
  );
};

export default Feature;
