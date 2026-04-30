import Image from "next/image";
import CoursesCard from "./CoursesCard";
// import { FadeLoader } from "react-spinners";


const PopularCourses = async () => {
    const res = await fetch('https://skillsphere-nextjs.vercel.app/data.json')
    const courses = await res.json()
    console.log(courses)

    const topCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div className='mt-15 container mx-auto px-2'>
            <div>
                <h2 className='font-bold text-2xl text-sky-900'>Populer Courses</h2>

               

                <div className="grid md:grid-cols-3 gap-6 ">
                    
                    {topCourses.map((course) => (
                        <CoursesCard key={course.id} course={course}>

                        </CoursesCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;