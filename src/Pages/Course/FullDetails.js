import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FiDownload} from 'react-icons/fi';
import Pdf from 'react-to-pdf';

const FullDetails = () => {
    const course = useLoaderData()
    const ref = React.createRef();
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                  </p>
                </div>
                <h2 className="max-w-lg mb-6t items-center flex font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>{' '}
                  {course.title}
                  <Pdf targetRef={ref} filename="course-details.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>{<FiDownload className='ml-5' />}</button>}
                  </Pdf>
                  
                </h2>
                <p ref={ref} className="text-base text-gray-700 md:text-lg">
                  {course.details}
                </p>
              </div>
              <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                    <img src={course.image_url}  alt={course.name}/>
                </div>
              </div>
              <Link to={`/checkout/${course._id}`} className="text-center w-full mx-auto block mt-10"><button className="btn btn-outline">Get Premium Access</button></Link>
            </div>
        </div>
    );
};

export default FullDetails;