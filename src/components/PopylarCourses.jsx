import Image from "next/image";


const PopylarCourses = async () => {
    const res = await fetch('https://skillsphere-nextjs.vercel.app/data.json')
    const courses = await res.json()
    console.log(courses)

    const topCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div className='mt-15 container mx-auto'>
            <div>
                <h2 className='font-bold text-2xl text-sky-900'>Populer Courses</h2>

                <div className="grid md:grid-cols-3 gap-6 px-2">
                    {topCourses.map((course) => (
                        <div key={course.id} className="card border border-sky-100  shadow-md mt-8">
                            <figure>
                                <Image 
                                src={course.image}
                                alt={course.title}
                                width={500}
                                height={300}
                                layout="responsive"
                                ></Image>
                            </figure>
                            <div className="card-body space-y-2">
                                <h2 className="card-title text-sky-900">
                                    {course.title}
                                    
                                </h2>
                                <p className="font-bold text-gray-800">Instractor: {course.instructor}</p>
                                <div className="card-actions justify-between items-center">
                                    <p className="font-bold text-gray-400 ">Ratings: <span className="text-sky-500">{course.rating}</span>

                                    </p>
                                    <button className="px-5 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopylarCourses;