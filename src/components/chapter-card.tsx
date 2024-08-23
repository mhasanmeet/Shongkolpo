import type { Types } from "lib/types/types"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { FaFileAlt, FaListUl, FaPlay } from "react-icons/fa"

const ChapterCard = ({
  courseId,
  chapter,
}: {
  courseId: Types.ObjectId
  chapter: Types.Chapter
}) => {
  return (
    <motion.a
      href={`/${courseId}/${chapter._id}`}
      className='block w-full h-full'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl'>
        <div className='relative'>
          <img
            src={chapter.chapterImage}
            alt='chapter thumbnail'
            className='w-full h-48 object-cover transition-all duration-300 ease-in-out group-hover:scale-105'
          />
          <div className='absolute top-0 right-0 bg-[#5FB6BE] text-white px-2 py-1 text-xs font-bold rounded-bl-lg'>
            {chapter.paper === 1 ? "1st Paper" : "2nd Paper"}
          </div>
        </div>
        <div className='p-4 flex flex-col justify-between flex-grow'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>
              {chapter.title}
            </h3>
            <div className='flex items-center mb-2'>
              <FaFileAlt className='text-[#5FB6BE] mr-2' />
              <span className='text-sm text-gray-600'>
                {chapter.paper === 1 ? "1st Paper" : "2nd Paper"}
              </span>
            </div>
            <div className='flex items-center mb-4'>
              <FaListUl className='text-[#5FB6BE] mr-2' />
              <span className='text-sm text-gray-600'>
                {chapter.topics.length} Topics
              </span>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='outline'
              size='sm'
              className='w-full bg-transparent border-[#5FB6BE] text-[#5FB6BE] hover:bg-[#5FB6BE] hover:text-white transition-all duration-300 ease-in-out'
            >
              <span className='w-full text-center flex items-center justify-center'>
                <FaPlay className='mr-2' />
                Start Module
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}

export default ChapterCard
