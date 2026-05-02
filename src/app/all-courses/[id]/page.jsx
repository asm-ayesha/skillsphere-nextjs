import { convertToDB } from "better-auth/db";
import Image from "next/image";
import { FaBookOpen, FaCheckCircle, FaSignal, FaStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";


const CourseDtailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://skillsphere-nextjs.vercel.app/data.json')
    const courses = await res.json()

    const course = courses.find(c => c.id == id)

    const curriculum = course.curriculum || [
        {
            module: "Module 1: Foundations & Setup",
            lessons: [
                "Introduction to the course",
                "Environment Setup and Tools",
                "Understanding the Project Structure",
                "Installing Dependencies & Configuration",
            ],
        },
        {
            module: "Module 2: Core Concepts",
            lessons: [
                "Basic Fundamentals",
                "Deep Dive into Features",
                "Understanding Data Flow",
                "Working with State & Props",
            ],
        },
        {
            module: "Module 3: Intermediate Topics",
            lessons: [
                "Component Architecture & Reusability",
                "API Integration & Fetching Data",
                "Error Handling & Debugging",
                "Performance Optimization Techniques",
            ],
        },
        {
            module: "Module 4: Advanced Techniques",
            lessons: [
                "Advanced Patterns & Best Practices",
                "Authentication & Authorization",
                "Working with Databases",
                "Third-party Library Integration",
            ],
        },
        {
            module: "Module 5: Real-World Project",
            lessons: [
                "Project Planning & Architecture",
                "Building Core Features",
                "Testing & Quality Assurance",
                "Deployment & CI/CD Pipeline",
            ],
        },
        {
            module: "Module 6: Career & Next Steps",
            lessons: [
                "Code Review & Refactoring",
                "Portfolio Project Walkthrough",
                "Interview Preparation Tips",
                "Resources & Continuing Your Learning Journey",
            ],
        },
    ];

    return (
        <div className="container mx-auto px-2">
            <h1 className="text-2xl text-sky-900 font-bold ">Course Details</h1>

            <div className="border border-sky-200 p-6 shadow-md mt-7 rounded-xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 items-center md:gap-4 ">
                <div className="">
                    <Image
                        src={course.image}
                        alt={course.title}
                        width={700}
                        height={500}
                        className="rounded-xl"
                    >
                    </Image>
                </div>
                <div>
                    <div className="space-y-2">
                        <h2 className="text-2xl text-sky-700">{course.title}</h2>
                        <p className="text-gray-600">{course.description}</p>

                        <div className="flex justify-between gap-2">
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

            <div className="mt-8 border border-sky-100 rounded-2xl p-6 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-8 border-b border-sky-50 pb-4">
                    <h3 className="text-xl font-bold text-sky-900">Course Curriculum</h3>
                </div>

                <div className="space-y-8">
                    {curriculum.map((item, index) => (
                        <div key={index} className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <FaBookOpen className="text-sky-600 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-gray-800 text-lg">
                                    {item.module}
                                </h4>
                            </div>

                            <ul className="grid grid-cols-1 gap-3 ml-4 md:ml-9">
                                {item.lessons.map((lesson, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600 hover:text-sky-700 transition-colors cursor-pointer group/item">
                                        <FaCheckCircle size={14} className="text-sky-400 group-hover/item:text-sky-600" />
                                        <span className="text-md">
                                            Lesson {index + 1}.{idx + 1}: {lesson}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDtailsPage;



