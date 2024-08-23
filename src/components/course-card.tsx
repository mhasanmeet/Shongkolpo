import type { Types } from "lib/types/types"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { FaEye, FaBook } from "react-icons/fa"
import { RiGraduationCapFill } from "react-icons/ri"

const CourseCard = ({ course }: { course: Types.Course }) => {
  return (
    <motion.a
      href={`/${course._id}`}
      className='block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full h-full transition-all duration-300 ease-in-out hover:shadow-xl'>
        <div className='relative'>
          <img
            src={course.courseImage}
            alt='course thumbnail'
            className='w-full h-48 object-cover transition-all duration-300 ease-in-out group-hover:scale-105'
          />
          <div className='absolute top-0 right-0 bg-[#5FB6BE] text-white px-2 py-1 text-xs font-bold rounded-bl-lg'>
            {course.type}
          </div>
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>
            {course.title}
          </h3>
          <div className='flex items-center mb-2'>
            <FaBook className='text-[#5FB6BE] mr-2' />
            <span className='text-sm text-gray-600'>{course.class}</span>
          </div>
          <div className='flex items-center mb-4'>
            <RiGraduationCapFill className='text-[#5FB6BE] mr-2' />
            <span className='text-sm text-gray-600'>{course.type}</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='outline'
              size='sm'
              className='w-full bg-transparent border-[#5FB6BE] text-[#5FB6BE] hover:bg-[#5FB6BE] hover:text-white transition-all duration-300 ease-in-out'
            >
              <span className='w-full text-center flex items-center justify-center'>
                <FaEye className='mr-2' />
                View Course
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}

export default CourseCard
