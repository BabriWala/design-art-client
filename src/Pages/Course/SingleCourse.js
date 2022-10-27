import React from 'react';

const singleCourse = ({course}) => {
    const {title, details, image_url} = course;
    return (
        <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                <p  aria-label="Article">
                    <img
                    src={image_url}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                    />
                </p>
                <div className="py-5">
                    <p
                    
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                    <p className="text-2xl font-bold leading-5">{title}</p>
                    </p>
                    <p className="mb-4 text-gray-700">
                    {details}
                    </p>
                    <div className="flex space-x-4">
                    <p
                        
                        aria-label="Likes"
                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                        <p className="font-semibold">Rating: {course.rating.number}</p>
                    </p>
                    <p
                        
                        aria-label="Comments"
                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                        <div className="mr-2">
                        </div>
                        <p className="font-semibold">Badge: {course.rating.badge}</p>
                    </p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default singleCourse;