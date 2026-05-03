import AllCoursesClient from "@/components/homepage/AllCoursesClient";

const AllCoursesPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
  const courses = await res.json();

  return <AllCoursesClient courses={courses} />;
};

export default AllCoursesPage;