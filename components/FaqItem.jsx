import React, { useState } from 'react';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          className="w-[44px] h-[44px] bg-amber-300 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill className="text-black text-2xl transition-opacity duration-700 opacity-100" />
          ) : (
            <RiAddFill className="text-black text-2xl transition-opacity duration-700 opacity-100" />
          )}
        </button>
      </div>

      {/* description */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[200px] opacity-100 p-[16px]" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;
