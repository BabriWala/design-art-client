import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    console.log(course)
    const handleToast = ()=>{
        toast("Wow You have Enrolled It. Wait For Confirmation Message");
    }
    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 mx-auto sm:p-10 bg-gray-200 rounded ">
            <h2 className="text-xl font-semibold text-center">Your cart for: {course.title} courses</h2>
            <img src={course.image_url} alt={course.title}/>

                <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back 
                    <Link to={'/course'}><span className="sr-only sm:not-sr-only"> to shop</span></Link>
                </button>
                <button onClick={handleToast} type="button" className="px-6 py-2 border border-violet-400 rounded-md  ">
                
                    <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                    
                </button>
                {<ToastContainer />}
                
        </div>
    );
};

export default CheckOut;