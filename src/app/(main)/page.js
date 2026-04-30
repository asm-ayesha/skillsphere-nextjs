import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import PopularCourses from "@/components/homepage/PopylarCourses";
import PopylarCourses from "@/components/homepage/PopylarCourses";
import TopInstructors from "@/components/homepage/TopInstructors";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Banner></Banner>
        <PopularCourses></PopularCourses>
        <LearningTips></LearningTips>
        <TopInstructors></TopInstructors>
      </div>
  );
}
