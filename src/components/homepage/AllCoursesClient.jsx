"use client";

import { useState } from "react";
import CoursesCard from "@/components/homepage/CoursesCard";
import SearchCourses from "@/components/homepage/SearchCourses";

const AllCoursesClient = ({ courses }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold m-4 text-sky-900">All Courses</h1>
        <SearchCourses
          courses={courses}
          setFilteredCourses={setFilteredCourses}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))
      ) :   <p className="text-center col-span-3 text-gray-500 text-lg mt-10">
            No results found.
          </p>
      }
      </div>
    </div>
  );
};

export default AllCoursesClient;