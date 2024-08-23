import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoChevronDownCircleOutline } from "react-icons/io5"
import { FaCircleCheck } from "react-icons/fa6"
import type { Types } from "lib/types/types"
import LectureCard from "./lecture-card"
import { getLecturesByTopicId } from "lib/utils/helpers"
import { pushRoute, useParams } from "lib/utils/urlHandler"

// import { useNavigate } from "react-router-dom"

interface ExpandedTopic extends Types.Topic {
  expanded: boolean
}

const CourseAccordion: React.FC<{ topics: Types.Topic[] }> = ({
  topics: initialTopics,
}) => {
  // const navigate = useNavigate()

  const [topics, setTopics] = useState<ExpandedTopic[]>(() =>
    initialTopics.map((topic) => ({ ...topic, expanded: false }))
  )
  const [lectures, setLectures] = useState<Types.Lecture[]>(() =>
    initialTopics.flatMap((topic) =>
      (getLecturesByTopicId(topic._id) ?? []).filter(
        (lecture) => lecture.published
      )
    )
  )
  const [selectedLecture, setSelectedLecture] = useState<Types.Lecture | null>(
    null
  )

  const [courseId, chapterId, lectureId] = useParams()

  useEffect(() => {
    if (lectureId) {
      const selectedLecture = lectures.find((l) => l._id === lectureId)
      if (selectedLecture) {
        setSelectedLecture(selectedLecture)
        const topicWithSelectedLecture = topics.find((topic) =>
          topic.lectures.some((lec) => lec.lectureId === lectureId)
        )
        if (topicWithSelectedLecture) {
          setTopics((prevTopics) =>
            prevTopics.map((topic) => ({
              ...topic,
              expanded: topic._id === topicWithSelectedLecture._id,
            }))
          )
        }
      }
    }
  }, [lectureId])

  const toggleTopic = (topicId: Types.ObjectId) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) => ({
        ...topic,
        expanded: topic._id === topicId ? !topic.expanded : false,
      }))
    )
  }

  const toggleLectureCompletion = (lectureId: Types.ObjectId) => {
    setLectures((prevLectures) =>
      prevLectures.map((lecture) =>
        lecture._id === lectureId
          ? { ...lecture, completed: !lecture.completed }
          : lecture
      )
    )
  }

  const isTopicComplete = (topic: Types.Topic): boolean => {
    const publishedLectures = topic.lectures.filter((lec) =>
      lectures.find((l) => l._id === lec.lectureId && l.published)
    )
    return (
      publishedLectures.length > 0 &&
      publishedLectures.every(
        (lec) => lectures.find((l) => l._id === lec.lectureId)?.completed
      )
    )
  }

  const getTopicProgress = (
    topic: Types.Topic
  ): { completed: number; total: number } => {
    const publishedLectures = topic.lectures.filter((lec) =>
      lectures.find((l) => l._id === lec.lectureId && l.published)
    )
    const completedLectures = publishedLectures.filter(
      (lec) => lectures.find((l) => l._id === lec.lectureId)?.completed
    ).length
    return { completed: completedLectures, total: publishedLectures.length }
  }

  const handleSelectLecture = (lecture: Types.Lecture) => {
    setSelectedLecture(lecture)
    // navigate(lecture._id as string)
    pushRoute(lecture._id as string)
  }

  return (
    <motion.div
      className='max-w-2xl mx-auto mt-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {topics.map((topic) => (
        <motion.div
          key={topic._id}
          className={`mb-4 border rounded-lg overflow-hidden shadow-md ${
            topic.isLive ? "border-red-500 border-2" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ${
              topic.isLive
                ? "bg-red-100 hover:bg-red-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => toggleTopic(topic._id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='flex items-center'>
              {topic.isLive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className='mr-2'
                >
                  <span className='bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                    LIVE
                  </span>
                </motion.div>
              )}
              {isTopicComplete(topic) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <FaCircleCheck className='mr-2 text-green-500' size={20} />
                </motion.div>
              )}
              <span
                className={`font-semibold text-lg ${
                  topic.isLive ? "text-red-700" : ""
                }`}
              >
                {topic.title}
              </span>{" "}
            </div>
            <div className='flex items-center'>
              <span className='mr-2 text-sm text-gray-600'>
                {getTopicProgress(topic).completed}/
                {getTopicProgress(topic).total}
              </span>
              <motion.div
                className='z-0'
                animate={{ rotate: topic.expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoChevronDownCircleOutline
                  size={24}
                  className={topic.isLive ? "text-red-600" : "text-gray-600"}
                />
              </motion.div>
            </div>
          </motion.div>
          <AnimatePresence>
            {topic.expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className='p-4 bg-white'>
                  {(() => {
                    const publishedLectures = topic.lectures
                      .map((lecRef) =>
                        lectures.find(
                          (l) => l._id === lecRef.lectureId && l.published
                        )
                      )
                      .filter(
                        (lecture): lecture is NonNullable<typeof lecture> =>
                          lecture !== undefined
                      )

                    if (publishedLectures.length === 0) {
                      return (
                        <div className='text-gray-600 text-center text-sm font-semibold'>
                          No lecture available yet
                        </div>
                      )
                    }

                    return publishedLectures.map((lecture) => (
                      <LectureCard
                        key={lecture._id}
                        lecture={lecture}
                        onToggleCompletion={toggleLectureCompletion}
                        onSelectLecture={handleSelectLecture}
                        isSelected={lecture._id === selectedLecture?._id}
                      />
                    ))
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CourseAccordion
