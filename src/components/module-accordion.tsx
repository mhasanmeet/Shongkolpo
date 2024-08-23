// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import CourseAccordion from "./course-accordion"
import type { Types } from "lib/types/types"
import { useParams, navigate } from "lib/utils/urlHandler"

import { getChaptersByCourseId, getCourseById } from "lib/utils/helpers"

interface ModuleAccordionProps {
  topics: Types.Topic[]
}

const ModuleAccordion: React.FC<ModuleAccordionProps> = ({ topics }) => {
  const [courseId, chapterId] = useParams()
  const course = getCourseById(courseId)
  const chapters = getChaptersByCourseId(courseId)

  const handleChapterChange = (newChapterId: string) => {
    navigate(`/${courseId}/${newChapterId}`)
  }

  return (
    <div className='border-2 px-6 rounded-sm'>
      <div className='flex flex-col gap-2 my-4 border p-4 rounded-md shadow-md z-0'>
        <h2 className='text-lg text-[#5FB6BE] font-bold'>{course?.title}</h2>

        <Select value={chapterId} onValueChange={handleChapterChange}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Chapter' />
          </SelectTrigger>
          <SelectContent>
            {chapters &&
              chapters.map((chapter) => (
                <SelectItem key={chapter._id} value={chapter._id}>
                  {chapter.title}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {/* <div className='my-4 flex w-full max-w-sm items-center space-x-2'>
        <Input
          type='text'
          placeholder='Search for lecture'
          className='shadow-md'
        />
        <Button
          type='button'
          size='icon'
          variant='outline'
          className='hover:bg-[#5FB6BE] hover:text-white shadow-md'
        >
          <MagnifyingGlassIcon />
        </Button>
      </div> */}
      <CourseAccordion topics={topics} />
    </div>
  )
}

export default ModuleAccordion
