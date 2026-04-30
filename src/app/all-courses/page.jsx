import CoursesCard from '@/components/homepage/CoursesCard';
import Image from 'next/image';
import React from 'react';

const AllCoursesPage = async () => {
    const res = await fetch('https://skillsphere-nextjs.vercel.app/data.json')
    const courses = await res.json()
    
    return (
        <div>
            <h1 className='text-2xl font-bold m-4 text-sky-900' >All Courses</h1>
           
           
           <div className="grid md:grid-cols-3 gap-6 ">
                               
                               {courses.map((course) => (
                                   <CoursesCard key={course.id} course={course}></CoursesCard>
                               ))}
                           </div>
        </div>
    );
};

export default AllCoursesPage;