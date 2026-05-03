import CoursesCard from "./CoursesCard";


const PopularCourses = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`)
    const courses = await res.json()


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