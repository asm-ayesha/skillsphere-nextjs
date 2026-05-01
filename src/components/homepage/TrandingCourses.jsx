
'use client'
import Image from 'next/image';
import React from 'react';


const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "John Doe",
    price: "$49",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 2,
    title: "React & Next.js Mastery",
    instructor: "Jane Smith",
    price: "$59",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    instructor: "Alex Roy",
    price: "$39",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "Python for Beginners",
    instructor: "David Kim",
    price: "$29",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&auto=format"
  }
];

const TrandingCourses = () => {
    return (
        <section className="container mx-auto px-4 py-10">
      
      {/* Title */}
      <div className="mb-8 ">
        <h2 className="text-3xl font-bold text-sky-800">
          Trending Courses
        </h2>
        
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-sky-700">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                👨‍🏫 {course.instructor}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-sky-800">
                  {course.price}
                </span>

                <button className="text-sm bg-sky-700 text-white px-3 py-1 rounded-lg hover:bg-sky-900">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
    );
};

export default TrandingCourses;



