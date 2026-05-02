import AllCoursesClient from "@/components/homepage/AllCoursesClient";

const AllCoursesPage = async () => {
  const res = await fetch("https://skillsphere-nextjs.vercel.app/data.json");
  const courses = await res.json();

  return <AllCoursesClient courses={courses} />;
};

export default AllCoursesPage;