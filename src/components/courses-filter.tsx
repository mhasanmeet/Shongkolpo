import { getAllCourses } from "lib/utils/helpers"
import CourseCard from "./course-card"

const CoursesFilter = () => {
  const courses = getAllCourses()

  return (
    <div className='flex flex-wrap gap-4'>
      {courses &&
        courses.map(
          (course) =>
            course.status === "published" && (
              <CourseCard key={course._id} course={course} />
            )
        )}
    </div>
  )
}

export default CoursesFilter
