import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl">Frequently Asked Questions</h1>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="space-y-4">
              <Item title="How much Time you will provide Support every course?">
                Only One Year and Lifetime Support.
              </Item>
              <Item title="How many instructor in your company?">
                More Than 50 Instructor
              </Item>
              <Item title="Where your Office located?">
                Dhaka, Mohammadpur
              </Item>
              <Item title="Are you fully Autheticated company?">
                Yes, We are Autheticated.
              </Item>
              <Item title="Can We get Refund?">
                No, You cannot get Refund.
              </Item>
              <Item title="How we can purchase a course?">
                First slect a course then puchase it.
              </Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
