import React, { useState } from "react"
import ControlTabs from "./control-tabs"
import { Button } from "./ui/button"
import { useParams } from "lib/utils/urlHandler"
import { getLectureById } from "lib/utils/helpers"
import { motion } from "framer-motion"
import QuizExamPage from "./quiz-exam-page"
import { RxCrossCircled } from "react-icons/rx"

const ControlTabsWrapper: React.FC = () => {
  const [courseId, chapterId, lectureId] = useParams()
  const [showQuizModal, setShowQuizModal] = useState(false)

  let lecture = getLectureById(lectureId)

  if (!lecture) {
    const firstLecture = getLectureById("vector-1-lecture-1")
    lecture = firstLecture
  }

  if (!lecture) {
    const firstLecture = getLectureById("vector-1-lecture-1")
    lecture = firstLecture
  }

  const handleStartQuiz = () => {
    setShowQuizModal(true)
  }

  const handleCloseQuiz = () => {
    setShowQuizModal(false)
  }

  const tabs = [
    {
      id: "description",
      label: "Description",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-bold mb-4'>{lecture?.title}</h2>
          <p>{lecture?.description}</p>
        </motion.div>
      ),
    },
    {
      id: "reference",
      label: "Reference",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-bold mb-4'>Reference Materials</h2>
          <ul className='list-inside list-disc text-base'>
            {lecture?.references.length !== 0 ? (
              lecture?.references.map((ref) => (
                <li
                  key={ref._id}
                  className='text-base underline text-cyan-700 visited:text-blue-600'
                >
                  <a href={ref.url} target='_blank'>
                    {ref.title}
                  </a>
                </li>
              ))
            ) : (
              <li>No references available</li>
            )}
          </ul>
        </motion.div>
      ),
      count: lecture?.references.length,
    },
    {
      id: "quiz",
      label: "Quiz",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-bold mb-4'>Quiz</h2>
          <p className='mb-6'>
            Test your knowledge with this quiz on linear equations.
          </p>

          <Button
            onClick={handleStartQuiz}
            variant='outline'
            className='hover:bg-[#5FB6BE] hover:text-white'
          >
            Start Quiz
          </Button>
        </motion.div>
      ),
      count: lecture?.quizzes.length,
    },
  ]

  return (
    <>
      <ControlTabs tabs={tabs} />

      {showQuizModal && lecture?.quizzes[0] && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-auto z-50'>
          <div className='bg-white rounded-md p-6 w-11/12 max-w-4xl max-h-[90vh] overflow-auto'>
            <Button
              onClick={handleCloseQuiz}
              variant='ghost'
              className='hover:text-red-500'
              size='icon'
            >
              <RxCrossCircled size={25} />
            </Button>
            <QuizExamPage quizId={lecture.quizzes[0].quizId} />
          </div>
        </div>
      )}
    </>
  )
}

export default ControlTabsWrapper
