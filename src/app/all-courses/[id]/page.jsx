import { convertToDB } from "better-auth/db";
import Image from "next/image";
import { FaSignal, FaStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";


const CourseDtailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://skillsphere-nextjs.vercel.app/data.json')
    const courses = await res.json()

    const course = courses.find(c => c.id == id)
    console.log(course)
    return (
        <div className="container mx-auto px-2">
            <h1 className="text-2xl text-sky-900 font-bold ">Course Details</h1>

            <div className="border border-sky-200 p-6 shadow-md mt-7 rounded-xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  items-center gap-4">
                <div className="">
                    <Image
                        src={course.image}
                        width={500}
                        height={500}
                        className="rounded-xl"
                    >
                    </Image>
                </div>
                <div>
                    <div className="space-y-2">
                        <h2 className="text-2xl text-sky-700">{course.title}</h2>
                        <p className="text-gray-600">{course.description}</p>

                        <div className="flex justify-between">
                            <p className="text-sky-900">Category: {course.category}</p>
                            <div className="flex items-center gap-1">
                                     <FaSignal color="#4682A9"></FaSignal>     
                                <p className="text-sky-900">{course.level}</p>
                            </div>
                           
                        </div>

                        <div className="flex justify-between">
                            <p className="text-sky-900">Instructor: {course.instructor}</p>
                           <div className="flex items-center gap-1">
                            <MdOutlineAccessTime color="#4682A9"></MdOutlineAccessTime>
                             <p className="text-sky-900">{course.duration}</p>
                           </div>
                          
                        </div>
                         <div className="flex items-center gap-1 text-amber-300">
                            <FaStar></FaStar> 
                             <p> {course.rating}</p>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDtailsPage;