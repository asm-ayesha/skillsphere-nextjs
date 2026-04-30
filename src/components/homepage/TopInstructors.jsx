"use client"

import Image from "next/image";

const TopInstructors = () => {


  const instructors = [
  {
    id: 1,
    name: "John Doe",
    expertise: "React & JavaScript",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Python & Data Science",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&auto=format",
  },
  {
    id: 3,
    name: "Mike Johnson",
    expertise: "Machine Learning",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format",
  },
  {
    id: 4,
    name: "Alice Williams",
    expertise: "Web Development",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=225&fit=crop&crop=face&auto=format",
  }
];

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-sky-900 mb-10">
        Top Instructors
      </h2>

      {/* Instructor Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="card bg-white border border-sky-200 shadow-md rounded-lg p-6">
            <figure className="flex justify-center mb-4">
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={100}
                height={100}
                className="rounded-full  object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold text-sky-800">{instructor.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{instructor.expertise}</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-yellow-500">★</span>
                <p className="text-sm text-sky-500">{instructor.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;