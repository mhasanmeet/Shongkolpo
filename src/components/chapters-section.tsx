import { useState } from "react"
import type { Types } from "lib/types/types"
import ChapterCard from "@/components/chapter-card"

interface ChaptersSectionProps {
  courseId: Types.ObjectId
  chapters: Types.Chapter[]
}

const ChaptersSection: React.FC<ChaptersSectionProps> = ({
  courseId,
  chapters,
}) => {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null)

  const filteredChapters = selectedPaper
    ? chapters.filter((chapter) => chapter.paper === selectedPaper)
    : chapters

  return (
    <div className='w-full'>
      <div className='mb-4'>
        <button
          onClick={() => setSelectedPaper(null)}
          className={`mr-2 px-4 py-2 rounded ${
            selectedPaper === null ? "bg-[#5FB6BE] text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedPaper(1)}
          className={`mr-2 px-4 py-2 rounded ${
            selectedPaper === 1 ? "bg-[#5FB6BE] text-white" : "bg-gray-200"
          }`}
        >
          Paper 1
        </button>
        <button
          onClick={() => setSelectedPaper(2)}
          className={`px-4 py-2 rounded ${
            selectedPaper === 2 ? "bg-[#5FB6BE] text-white" : "bg-gray-200"
          }`}
        >
          Paper 2
        </button>
      </div>

      <div>
        {filteredChapters.length === 0 && (
          <div className='text-center text-gray-500 w-full'>
            No chapters found for this course
          </div>
        )}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter._id}
            courseId={courseId}
            chapter={chapter}
          />
        ))}
      </div>
    </div>
  )
}

export default ChaptersSection
