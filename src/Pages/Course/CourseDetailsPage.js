import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetailsPage = ({course}) => {
    return (
        <Link to={`/course/${course._id}`}><button className="btn btn-wide mb-4" >{course.title}</button></Link>
    );
};

export default CourseDetailsPage;