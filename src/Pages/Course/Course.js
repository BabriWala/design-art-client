import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsPage from './CourseDetailsPage';
import SingleCourse from './SingleCourse';
import './Course.css'

const Course = () => {

    const course = useLoaderData()
    // console.log(course)

    return (
        <div className='flex flex-col lg:flex-row'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        course.map(c => <SingleCourse key={course._id} course={c} ></SingleCourse>)
                    }
                </div>
            </div>
            <div className='py-10 lg:py-20 text-center'>
                {
                    course.map(c=> <CourseDetailsPage key={course._id} course={c}></CourseDetailsPage>)
                }
            </div>
        </div>
    );
};

export default Course;