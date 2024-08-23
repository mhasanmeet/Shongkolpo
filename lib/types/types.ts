export namespace Types {
  export type ObjectId = string

  export interface Course {
    _id: ObjectId
    courseImage: string
    title: string
    navbarTitle: string
    type: string
    class: string
    version: string
    academicYear: string
    courseFee: number
    discount: number
    discountedFee: number
    status: string
    createdAt: Date
    description: string
    subject: { subjectID: ObjectId }
    chapters: { chapterID: ObjectId }[]
    instructors: { instructorID: ObjectId }[]
  }

  export interface Subject {
    _id: ObjectId
    subjectImage: string
    title: string
    class: string
    chapters: {
      chapterNo: number
      chapterId: ObjectId
    }[]
  }

  export interface Chapter {
    _id: ObjectId
    chapterImage: string
    title: string
    paper: number
    topics: {
      topicNo: number
      topicId: ObjectId
    }[]
  }

  export interface Topic {
    _id: ObjectId
    title: string
    isLive?: boolean
    lectures: {
      lecNo: number
      lectureId: ObjectId
    }[]
  }

  export interface Lecture {
    _id: ObjectId
    title: string
    videoUrl: string
    duration: string
    description: string
    references: Reference[]
    academicYear: string
    published: boolean
    quizzes: {
      quizNo: number
      quizId: ObjectId
    }[]
    completed: boolean
    isLive?: boolean
    liveDate?: string
    thumbnail?: string
  }

  export interface Reference {
    _id: ObjectId
    title: string
    url: string
  }

  export interface Quiz {
    _id: ObjectId
    title: string
    duration: number
    questions: {
      questionNo: number
      id: ObjectId
    }[]
  }

  export interface Question {
    _id: ObjectId
    question: string
    options: string[]
    correctAnswer: string
    explanation?: string
  }

  export interface Instructor {
    _id: ObjectId
    instructorImage: string
    name: string
    email: string
    phone: string
    bio: string
    experience: string
    courses: {
      courseId: ObjectId
    }[]
  }
}
