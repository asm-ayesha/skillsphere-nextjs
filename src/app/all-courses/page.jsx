

// import CoursesCard from '@/components/homepage/CoursesCard';
// import SearchCourses from '@/components/homepage/SearchCourses';

// const AllCoursesPage = async () => {
//     const res = await fetch('https://skillsphere-nextjs.vercel.app/data.json')
//     const courses = await res.json()

//     return (
//         <div className='container mx-auto'>

//             <div className='flex justify-between items-center'>
//                 <div>
//                     <h1 className='text-2xl font-bold m-4 text-sky-900' >All Courses</h1>
//                 </div>
//                 <SearchCourses
//                 ></SearchCourses>
//             </div>


//             <div className="grid md:grid-cols-3 gap-6 ">

//                 {courses.map((course) => (
//                     <CoursesCard key={course.id} course={course}></CoursesCard>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllCoursesPage;

import AllCoursesClient from "@/components/homepage/AllCoursesClient";

const AllCoursesPage = async () => {
  const res = await fetch("https://skillsphere-nextjs.vercel.app/data.json");
  const courses = await res.json();

  return <AllCoursesClient courses={courses} />;
};

export default AllCoursesPage;