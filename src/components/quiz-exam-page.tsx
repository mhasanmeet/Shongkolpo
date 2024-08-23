import type { Types } from "lib/types/types"
import { getQuestionsByQuizId, getQuizById } from "lib/utils/helpers"
import { useState, useEffect } from "react"

interface ExamPageProps {
  quizId: Types.ObjectId
}

const QuizExamPage: React.FC<ExamPageProps> = ({ quizId }) => {
  const currentQuiz = getQuizById(quizId)
  const currentQuestions = getQuestionsByQuizId(quizId)

  const [quiz, setQuiz] = useState<Types.Quiz | null>(currentQuiz)
  const [questions, setQuestions] = useState<Types.Question[]>(
    currentQuestions || []
  )
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null
  }>({})
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(quiz?.duration || 30)
  const [results, setResults] = useState({
    attempted: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
  })

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)

      return () => clearInterval(timerId)
    }

    handleSubmit()
  }, [timeLeft])

  const handleClick = (questionId: number, option: string) => {
    if (!submitted) {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [questionId]: option,
      }))
    }
  }

  const handleSubmit = () => {
    let correct = 0
    let wrong = 0
    let attempted = 0

    questions?.forEach((question, index) => {
      const selectedOption = selectedOptions[index]
      if (selectedOption) {
        attempted++
        if (selectedOption === question.correctAnswer) {
          correct++
        } else {
          wrong++
        }
      }
    })

    setResults({
      attempted,
      correct,
      wrong,
      skipped: (questions?.length || 0) - attempted,
    })

    setSubmitted(true)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return (
    <div className='container mx-auto px-4 py-8 relative'>
      {!submitted && (
        <div className='fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md z-50'>
          <p className='text-base font-semibold'>
            Time Left: {formatTime(timeLeft)}
          </p>
        </div>
      )}

      <h1 className='text-3xl font-bold text-center text-primary mb-8'>
        {quiz?.title}
      </h1>

      {submitted && (
        <div className='bg-white border rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='text-2xl font-bold text-center mb-4'>Quiz Results</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
            <p>Questions Attempted: {results.attempted}</p>
            <p className={`${results.correct > 0 ? "text-green-600" : ""}`}>
              Correct Answers: {results.correct}
            </p>
            <p className={`${results.wrong > 0 ? "text-red-600" : ""}`}>
              Wrong Answers: {results.wrong}
            </p>
            <p className={`${results.skipped > 0 ? "text-yellow-600" : ""}`}>
              Skipped Questions: {results.skipped}
            </p>
          </div>
        </div>
      )}

      {questions?.map((question, index) => (
        <div
          key={question._id}
          className='bg-white border rounded-lg shadow-lg p-6 mb-6'
        >
          <h3 className='text-xl font-semibold mb-4'>
            {index + 1}. {question.question}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {question.options?.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`
                  cursor-pointer rounded-lg p-3 transition-colors
                  ${
                    selectedOptions[index] === option
                      ? "bg-blue-100 border-blue-500 border"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                  ${
                    submitted && option === question.correctAnswer
                      ? "bg-green-100 border-green-500 border"
                      : ""
                  }
                  ${
                    submitted &&
                    selectedOptions[index] === option &&
                    option !== question.correctAnswer
                      ? "bg-red-100 border-red-500 border"
                      : ""
                  }
                  ${!submitted ? "hover:border-gray-300" : ""}
                `}
                onClick={() => handleClick(index, option)}
              >
                <div className='flex items-center'>
                  <div
                    className={`
                      w-6 h-6 rounded-full flex items-center justify-center mr-3
                      ${
                        selectedOptions[index] === option
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-700"
                      }
                    `}
                  >
                    {String.fromCharCode(65 + optionIndex)}
                  </div>
                  <p>{option}</p>
                </div>
              </div>
            ))}
          </div>
          {submitted && question.explanation && (
            <div className='mt-4 p-3 bg-yellow-100 rounded-lg'>
              <p className='text-sm'>{question.explanation}</p>
            </div>
          )}
        </div>
      ))}

      <div className='text-center mt-8'>
        {!submitted ? (
          <button
            type='button'
            className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors'
            onClick={handleSubmit}
            disabled={submitted}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            type='button'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors'
            onClick={() => {
              setResults({ attempted: 0, correct: 0, wrong: 0, skipped: 0 })
              setSubmitted(false)
              setTimeLeft(quiz?.duration || 30)
              setSelectedOptions({})
            }}
          >
            Retake Quiz
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizExamPage
