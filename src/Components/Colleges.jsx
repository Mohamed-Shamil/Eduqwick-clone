import  { useState } from 'react';

const Colleges = () => {
  const courses = [
    {
      name: 'Engineering',
      colleges: [
        {
          name: 'Colleges By Degree',
          options: ['B.Tech', 'M.Tech', 'B.Tech + M.Tech', 'Diploma'],
        },
        {
          name: 'Colleges By Cities',
          options: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'],
        },
      ],
      states: ['Delhi-NCR', 'Rajasthan', 'Karnataka', 'Maharashtra'],
      popularColleges: ['Parul University', 'IIT Bombay', 'BITS-Pilani', 'IIT Madras'],
    },
    {
      name: 'Management',
      colleges: [
        {
          name: 'Colleges By Degree',
          options: ['MBA', 'BBA', 'PGDM'],
        },
        {
          name: 'Colleges By Cities',
          options: ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'],
        },
      ],
      states: ['Maharashtra', 'Delhi', 'Karnataka', 'West Bengal'],
      popularColleges: ['IIM Ahmedabad', 'ISB Hyderabad', 'XLRI Jamshedpur'],
    },
    {
      name: 'Medical',
      colleges: [
        {
          name: 'Colleges By Degree',
          options: ['MBBS', 'BDS', 'MD', 'MS'],
        },
        {
          name: 'Colleges By Cities',
          options: ['New Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
        },
      ],
      states: ['Delhi', 'Maharashtra', 'Tamil Nadu', 'West Bengal'],
      popularColleges: ['AIIMS New Delhi', 'Grant Medical College Mumbai', 'CMC Vellore'],
    },
    {
      name: 'Hotel Management',
      
    },
    {
      name: 'Physiotherapy',
    
    },
    {
      name: 'Paramedical',
    
    },
    {
      name: 'Arts & Humanities',
      
    },
    {
      name: 'Science',
      
    },   {
      name: 'Mass Comm & Journalism',
      
    },
    {
      name: 'Nursing',
      
    },   {
      name: 'Agriculture',
      
    },
    {
      name: 'Design',
     
    },
    {
      name: 'Information Technology',
     
    },
    {
      name: 'Pharmacy',
      
    },
    {
      name: 'Dental',
     
    },
    {
      name: 'Performing Arts',
      
    },
    {
      name: 'Comm & Banking',
     
    },
    {
      name: 'Education',
    
    },
    {
      name: 'Law',
      
    },
    {
      name: 'Fashion',
    
    }
  ];

  const [activeCourseType, setActiveCourseType] = useState(null);

  const handleCourseTypeClick = (index) => {
    if (index === activeCourseType) {
      setActiveCourseType(null); 
    } else {
      setActiveCourseType(index);
    }
  };

  const displayCourseDetails = (courseIndex) => {
    if (courseIndex === null) {
      return (
        <div className="text-center text-xl font-bold text-gray-800">
          Please select a course to view details...!
        </div>
      );
    }

    const course = courses[courseIndex];

    if (courseIndex >= 3) {
      return (
        <div className="text-center text-xl font-bold text-gray-800">
          Colleges not added for this course yet, please keep waiting...
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-xl underline mb-3 font-bold">
          {course.name} Colleges
        </h3>
        <div className="flex justify-around">
          {course.colleges.map((collegeCategory) => (
            <div key={collegeCategory.name}>
              <h4 className="text-lg font-bold">
                {collegeCategory.name} 
              </h4>
              {collegeCategory.options.map((option) => (
                <p
                  key={option}
                  className="font-medium hover:cursor-pointer"
                >
                  {option}
                </p>
              ))}
              <p className=" hover:cursor-pointer text-blue-700 font-semibold">
                View All
              </p>
            </div>
          ))}
        </div>
        <div className="flex mt-8 justify-around">
          <div>
            <h4 className="text-lg font-bold">Colleges By States</h4>
            {course.states.map((state) => (
              <p
                key={state}
                className="font-medium hover:cursor-pointer"
              >
                {state}
              </p>
            ))}
            <p className=" hover:cursor-pointer text-blue-700 font-semibold">
              View All
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Popular Colleges</h4>
            {course.popularColleges.map(
              (college) => (
                <p
                  key={college}
                  className="font-medium hover:cursor-pointer"
                >
                  {college}
                </p>
              )
            )}
            <p className=" hover:cursor-pointer text-blue-700 font-semibold">
              View All
            </p>
          </div>
        </div>
        <p className="mt-16">
          Didn&apos;t find what you are looking for{' '}
          <span className="hover:cursor-pointer text-blue-500 font-semibold">
            Click Here
          </span>{' '}
          to get a call from a counselor
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%] flex gap-5 p-5 bg-gray-100">
          <div className="bg-sky-200 w-1/5">
            {courses.map((course, index) => (
              <h1
                key={course.name}
                className={`ml-4 hover:text-lg hover:cursor-pointer font-bold ${
                  index === activeCourseType ? 'text-blue-700' : ''
                }`}
                onClick={() => handleCourseTypeClick(index)}
              >
                {course.name}
              </h1>
            ))}
          </div>
          <div className="p-2 bg-red-200 w-4/5">
            {displayCourseDetails(activeCourseType)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
