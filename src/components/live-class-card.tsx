import React from "react"
import type { Types } from "lib/types/types"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaBook, FaVideo } from "react-icons/fa"
import { RiGraduationCapFill } from "react-icons/ri"
import {
  getCourseIdFromLectureId,
  getChapterIdFromLectureId,
} from "lib/utils/helpers"
import CountDown from "./count-down"

const LiveClassCard = ({ live }: { live: Types.Lecture }) => {
  const courseId = getCourseIdFromLectureId(live._id)
  const chapterId = getChapterIdFromLectureId(live._id)

  return (
    <motion.a
      href={`${courseId}/${chapterId}/${live._id}`}
      className='block w-full mb-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[320px] sm:max-w-none mx-auto transition-all duration-300 ease-in-out hover:shadow-2xl border-2 border-red-500 flex flex-col sm:flex-row group'>
        <div className='relative w-full sm:w-2/5 lg:w-1/3'>
          <motion.img
            src={live.thumbnail}
            alt='live class thumbnail'
            className='w-full h-40 sm:h-full object-cover'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className='absolute top-0 left-0 bg-[#d31d2d] text-white px-2 py-1 text-xs sm:text-sm font-bold rounded-br-lg'>
            LIVE
          </div>
          {live.liveDate && (
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 sm:p-2 backdrop-blur-sm'>
              <CountDown targetDate={live.liveDate} />
            </div>
          )}
        </div>
        <div className='p-3 sm:p-6 flex flex-col justify-between w-full sm:w-3/5 lg:w-2/3 bg-gradient-to-br from-white to-gray-50'>
          <div>
            <h3 className='text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#d31d2d] transition-colors duration-300'>
              {live.title}
            </h3>
            <div className='flex items-center mb-1 sm:mb-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
              <FaBook className='text-[#d31d2d] mr-2 text-sm sm:text-base' />
              <span className='text-sm sm:text-lg'>{live.duration}</span>
            </div>
            <div className='flex items-center mb-2 sm:mb-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
              <RiGraduationCapFill className='text-[#d31d2d] mr-2 flex-shrink-0 text-sm sm:text-base' />
              <span className='text-sm sm:text-lg line-clamp-2'>
                {live.description}
              </span>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='mt-2 sm:mt-4'
          >
            <Button
              variant='outline'
              size='sm'
              className='w-full border-[#d31d2d] text-[#d31d2d] hover:bg-[#d31d2d] hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg text-sm sm:text-base'
            >
              <span className='w-full text-center flex items-center justify-center'>
                <FaVideo className='mr-2' />
                Join Live Class
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}

export default LiveClassCard
