import React from "react"
import type { Types } from "lib/types/types"
import { FaRegPlayCircle } from "react-icons/fa"

interface LectureCardProps {
  lecture: Types.Lecture
  onToggleCompletion: (lectureId: Types.ObjectId) => void
  onSelectLecture: (lecture: Types.Lecture) => void
  isSelected: boolean
}

const LectureCard: React.FC<LectureCardProps> = ({
  lecture,
  onToggleCompletion,
  onSelectLecture,
  isSelected,
}) => {
  return (
    <div
      className={`flex items-center p-4 mb-2 rounded-lg cursor-pointer transition-colors duration-300 ${
        isSelected
          ? "bg-blue-100 hover:bg-blue-200"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
      onClick={() => onSelectLecture(lecture)}
    >
      <FaRegPlayCircle
        className='flex-shrink-0 mr-3 text-[#5FB6BE]'
        size={25}
      />
      <div className='flex-grow min-w-0 mr-3'>
        <span className='font-semibold text-sm line-clamp-1'>
          {lecture.title}
        </span>
        <p className='text-xs text-gray-500 line-clamp-1'>
          {lecture.description}
        </p>
      </div>
      <span className='text-xs font-bold text-gray-500 flex-shrink-0'>
        {lecture.duration}
      </span>
    </div>
  )
}

export default LectureCard
