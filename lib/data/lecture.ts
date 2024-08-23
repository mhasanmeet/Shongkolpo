import type { Types } from "../types/types";

export const courseData: {
  courses: Types.Course[];
  subjects: Types.Subject[];
  chapters: Types.Chapter[];
  topics: Types.Topic[];
  lectures: Types.Lecture[];
  quizzes: Types.Quiz[];
  questions: Types.Question[];
  instructors: Types.Instructor[];
} = {
  courses: [
    {
      _id: "physics-cycle-1",
      courseImage: "https://placehold.co/600x400",
      title: "HSC'26 Physics",
      navbarTitle: "Physics",
      type: "Academic",
      class: "HSC",
      version: "Both",
      academicYear: "2024",
      courseFee: 0,
      discount: 0,
      discountedFee: 0,
      status: "published",
      createdAt: new Date("2024-01-01"),
      description: "This course covers the first cycle of Physics for HSC'26 students.",
      subject: { subjectID: "physics" },
      chapters: [{ chapterID: "vector-1" }, { chapterID: "dynamics-2" }, { chapterID: "work-energy-3" }, { chapterID: "gravitation-4" }],
      instructors: [{ instructorID: "tushar-iut13" }, { instructorID: "alamin-buet15" }],
    },
    {
      _id: "chemistry-cycle-1",
      courseImage: "https://placehold.co/600x400",
      title: "HSC'26 Chemistry",
      navbarTitle: "Chemistry",
      type: "Academic",
      class: "HSC",
      version: "Both",
      academicYear: "2024",
      courseFee: 0,
      discount: 0,
      discountedFee: 0,
      status: "published",
      createdAt: new Date("2024-01-01"),
      description: "This course covers the first cycle of Chemistry for HSC'26 students.",
      subject: { subjectID: "chemistry" },
      chapters: [{ chapterID: "atomic-structure-1" }, { chapterID: "chemical-bonding-2" }, { chapterID: "states-of-matter-3" }, { chapterID: "thermodynamics-4" }],
      instructors: [{ instructorID: "prince-bup19" }],
    },
  ],


  subjects: [
    {
      _id: "physics",
      subjectImage: "https://placehold.co/600x400",
      title: "Physics",
      class: "HSC",
      chapters: [
        { chapterNo: 1, chapterId: "vector-1" },
        { chapterNo: 2, chapterId: "dynamics-2" },
        { chapterNo: 3, chapterId: "work-energy-3" },
        { chapterNo: 4, chapterId: "gravitation-4" },
        { chapterNo: 5, chapterId: "oscillations-5" },
        { chapterNo: 6, chapterId: "waves-6" },
        { chapterNo: 7, chapterId: "thermodynamics-7" },
        { chapterNo: 8, chapterId: "electrostatics-8" },
        { chapterNo: 9, chapterId: "current-electricity-9" },
        { chapterNo: 10, chapterId: "magnetic-effect-10" },
        { chapterNo: 11, chapterId: "modern-physics-11" },
        { chapterNo: 12, chapterId: "optics-12" },
        { chapterNo: 13, chapterId: "semiconductor-13" },
        { chapterNo: 14, chapterId: "communication-14" },
      ]
    },
    {
      _id: "chemistry",
      subjectImage: "https://placehold.co/600x400",
      title: "Chemistry",
      class: "HSC",
      chapters: [
        { chapterNo: 1, chapterId: "atomic-structure-1" },
        { chapterNo: 2, chapterId: "chemical-bonding-2" },
        { chapterNo: 3, chapterId: "states-of-matter-3" },
        { chapterNo: 4, chapterId: "thermodynamics-4" },
        { chapterNo: 5, chapterId: "equilibrium-5" },
        { chapterNo: 6, chapterId: "s-block-6" },
        { chapterNo: 7, chapterId: "p-block-7" },
        { chapterNo: 8, chapterId: "d-block-8" },
        { chapterNo: 9, chapterId: "f-block-9" },
        { chapterNo: 10, chapterId: "coordination-compounds-10" },
        { chapterNo: 11, chapterId: "chemical-kinetics-11" },
        { chapterNo: 12, chapterId: "electrochemistry-12" },
        { chapterNo: 13, chapterId: "isomerism-13" },
        { chapterNo: 14, chapterId: "aliphatic-hydrocarbons-14" },
      ]
    },
  ],


  chapters: [
    {
      _id: "vector-1",
      chapterImage: "https://placehold.co/600x400",
      title: "Vector",
      paper: 1,
      topics: [
        {
          topicNo: 0,
          topicId: "vector-live",
        },
        {
          topicNo: 1,
          topicId: "vector-1-topic-1",
        },
        {
          topicNo: 2,
          topicId: "vector-1-topic-2",
        },
        {
          topicNo: 3,
          topicId: "vector-1-topic-3",
        },
      ],
    },
    {
      _id: "dynamics-2",
      chapterImage: "https://placehold.co/600x400",
      title: "Dynamics",
      paper: 1,
      topics: [
        {
          topicNo: 0,
          topicId: "dynamics-live",
        },
        {
          topicNo: 1,
          topicId: "dynamics-2-topic-1",
        },
        {
          topicNo: 2,
          topicId: "dynamics-2-topic-2",
        },
        {
          topicNo: 3,
          topicId: "dynamics-2-topic-3",
        },
      ],
    },
    {
      _id: "work-energy-3",
      chapterImage: "https://placehold.co/600x400",
      title: "Work and Energy",
      paper: 1,
      topics: [
        {
          topicNo: 0,
          topicId: "work-energy-live",
        },
        {
          topicNo: 1,
          topicId: "work-energy-3-topic-1",
        },
        {
          topicNo: 2,
          topicId: "work-energy-3-topic-2",
        },
        {
          topicNo: 3,
          topicId: "work-energy-3-topic-3",
        },
      ],
    },
    {
      _id: "gravitation-4",
      chapterImage: "https://placehold.co/600x400",
      title: "Gravitation",
      paper: 2,
      topics: [
        {
          topicNo: 0,
          topicId: "gravitation-live",
        },
        {
          topicNo: 1,
          topicId: "gravitation-4-topic-1",
        },
        {
          topicNo: 2,
          topicId: "gravitation-4-topic-2",
        },
      ],
    },
  ],


  topics: [
    {
      _id: "vector-live",
      title: "Live Class",
      isLive: true,
      lectures: [
        { lecNo: 1, lectureId: "vector-live-1" },
        { lecNo: 2, lectureId: "vector-live-2" },
        { lecNo: 3, lectureId: "vector-live-3" },
      ],
    },
    {
      _id: "dynamics-live",
      title: "Live Class",
      isLive: true,
      lectures: [
        { lecNo: 1, lectureId: "dynamics-live-1" },
        { lecNo: 2, lectureId: "dynamics-live-2" },
      ],
    },
    {
      _id: "work-energy-live",
      title: "Live Class",
      isLive: true,
      lectures: [
        { lecNo: 1, lectureId: "work-energy-live-1" },
        { lecNo: 2, lectureId: "work-energy-live-2" },
      ],
    },
    {
      _id: "gravitation-live",
      title: "Live Class",
      isLive: true,
      lectures: [
        { lecNo: 1, lectureId: "gravitation-live-1" },
        { lecNo: 2, lectureId: "gravitation-live-2" },
      ],
    },
    {
      _id: "vector-1-topic-1",
      title: "Introduction to Vectors",
      lectures: [
        { lecNo: 1, lectureId: "vector-1-lecture-1" },
        { lecNo: 2, lectureId: "vector-1-lecture-2" },
        { lecNo: 3, lectureId: "vector-1-lecture-3" },
      ],
    },
    {
      _id: "vector-1-topic-2",
      title: "Vector Addition",
      lectures: [
        { lecNo: 1, lectureId: "vector-1-lecture-4" },
        { lecNo: 2, lectureId: "vector-1-lecture-5" },
      ],
    },
    {
      _id: "vector-1-topic-3",
      title: "Vector Subtraction",
      lectures: [
        { lecNo: 1, lectureId: "vector-1-lecture-6" },
        { lecNo: 2, lectureId: "vector-1-lecture-7" },
      ],
    },
    {
      _id: "dynamics-2-topic-1",
      title: "Introduction to Dynamics",
      lectures: [
        { lecNo: 1, lectureId: "dynamics-2-lecture-1" },
        { lecNo: 2, lectureId: "dynamics-2-lecture-2" },
      ],
    },
    {
      _id: "dynamics-2-topic-2",
      title: "Newton's Laws of Motion",
      lectures: [
        { lecNo: 1, lectureId: "dynamics-2-lecture-3" },
        { lecNo: 2, lectureId: "dynamics-2-lecture-4" },
      ],
    },
    {
      _id: "dynamics-2-topic-3",
      title: "Friction",
      lectures: [
        { lecNo: 1, lectureId: "dynamics-2-lecture-5" },
        { lecNo: 2, lectureId: "dynamics-2-lecture-6" },
      ],
    },
    {
      _id: "work-energy-3-topic-1",
      title: "Introduction to Work and Energy",
      lectures: [
        { lecNo: 1, lectureId: "work-energy-3-lecture-1" },
        { lecNo: 2, lectureId: "work-energy-3-lecture-2" },
      ],
    },
    {
      _id: "work-energy-3-topic-2",
      title: "Work Done",
      lectures: [
        { lecNo: 1, lectureId: "work-energy-3-lecture-3" },
        { lecNo: 2, lectureId: "work-energy-3-lecture-4" },
      ],
    },
    {
      _id: "work-energy-3-topic-3",
      title: "Potential Energy",
      lectures: [
        { lecNo: 1, lectureId: "work-energy-3-lecture-5" },
        { lecNo: 2, lectureId: "work-energy-3-lecture-6" },

      ],
    },
    {
      _id: "gravitation-4-topic-1",
      title: "Introduction to Gravitation",
      lectures: [
        { lecNo: 1, lectureId: "gravitation-4-lecture-1" },
        { lecNo: 2, lectureId: "gravitation-4-lecture-2" },
      ],
    },
    {
      _id: "gravitation-4-topic-2",
      title: "Gravitational Constant",
      lectures: [
        { lecNo: 1, lectureId: "gravitation-4-lecture-3" },
        { lecNo: 2, lectureId: "gravitation-4-lecture-4" },
      ],
    }
  ],


  lectures: [
    {
      _id: "vector-live-1",
      title: "Vector Live 1",
      videoUrl: "https://www.youtube.com/watch?v=DbgvDGtjkEA",
      duration: "1:00:00",
      description: "Live class on vectors.",
      references: [],
      published: true,
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date(new Date().getTime() + 60 * 1000).toISOString(),
      thumbnail: "https://placehold.co/600x400",
    },
    {
      _id: "vector-live-2",
      title: "Vector Live 2",
      videoUrl: "https://www.youtube.com/watch?v=sVACGva66U8&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      description: "Live class on vectors.",
      references: [],
      published: false,
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
      thumbnail: "https://placehold.co/600x400",
    },
    {
      _id: "vector-live-3",
      title: "Vector Live 3",
      videoUrl: "https://www.youtube.com/watch?v=dBQirvubuPc&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      description: "Live class on vectors.",
      references: [],
      published: false,
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
      thumbnail: "https://placehold.co/600x400",
    },
    {
      _id: "vector-1-lecture-1",
      title: "Introduction to Vectors",
      videoUrl: "https://www.youtube.com/watch?v=WVKJCfRw6wA&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "9:30",
      description: "Introduction to vectors and their properties.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      published: true,
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "vec-1-lec-1-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "vector-1-lecture-2",
      title: "Vector Addition",
      videoUrl: "https://www.youtube.com/watch?v=sVACGva66U8&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "16:00",
      published: true,
      description: "Adding vectors using the parallelogram law.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
        {
          _id: "reference-003",
          title: "Reference 03",
          url: "https://www.mathwarehouse.com/algebra/vectors/adding-vectors.php"
        }
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "vec-1-lec-2-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "vector-1-lecture-3",
      title: "Vector Subtraction",
      videoUrl: "https://www.youtube.com/watch?v=dBQirvubuPc&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "30:00",
      published: true,
      description: "Subtracting vectors using the parallelogram law.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "vec-1-lec-3-quiz-1" },
        { quizNo: 2, quizId: "vec-1-lec-3-quiz-2" }
      ],
      completed: false
    },
    {
      _id: "vector-1-lecture-4",
      title: "Scalar Multiplication",
      videoUrl: "https://www.youtube.com/watch?v=WVKJCfRw6wA&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "9:30",
      published: true,
      description: "Multiplying vectors by a scalar.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "vector-1-lecture-5",
      title: "Dot Product",
      videoUrl: "https://www.youtube.com/watch?v=sVACGva66U8&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "16:00",
      published: true,
      description: "Calculating the dot product of two vectors.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "vector-1-lecture-6",
      title: "Cross Product",
      videoUrl: "https://www.youtube.com/watch?v=dBQirvubuPc&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "30:00",
      published: true,
      description: "Calculating the cross product of two vectors.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "vector-1-lecture-7",
      title: "Applications of Vectors",
      videoUrl: "https://www.youtube.com/watch?v=dBQirvubuPc&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "30:00",
      published: true,
      description: "Real-world applications of vectors.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "dynamics-live-1",
      title: "Dynamics Live 1",
      videoUrl: "https://www.youtube.com/watch?v=63EVXf_S4WQ",
      duration: "1:00:00",
      published: false,
      description: "Live class on dynamics.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
      thumbnail: "https://placehold.co/600x400",
    },
    {
      _id: "dynamics-live-2",
      title: "Live Class",
      videoUrl: "https://www.youtube.com/watch?v=5sKah3pJnHI&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      published: false,
      description: "Live class on dynamics",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
    },
    {
      _id: "dynamics-2-lecture-1",
      title: "Introduction to Dynamics",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "10:00",
      published: true,
      description: "Introduction to dynamics and its importance.",
      references: [{
        _id: "reference-001",
        title: "Reference 01",
        url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
      },
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "dyn-2-lec-1-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "dynamics-2-lecture-2",
      title: "Newton's Laws of Motion",
      videoUrl: "https://www.youtube.com/watch?v=5sKah3pJnHI&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "20:00",
      published: true,
      description: "Explanation of Newton's three laws of motion.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "dyn-2-lec-2-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "dynamics-2-lecture-3",
      title: "Friction",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "15:00",
      published: true,
      description: "Introduction to frictional forces and their effects.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "dynamics-2-lecture-4",
      title: "Newton's Laws of Motion 2",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "10:00",
      published: true,
      description: "Explanation of Newton's three laws of motion.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "dyn-2-lec-4-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "dynamics-2-lecture-5",
      title: "Friction 2",
      videoUrl: "https://www.youtube.com/watch?v=5sKah3pJnHI&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "20:00",
      published: true,
      description: "Introduction to frictional forces and their effects.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "dynamics-2-lecture-6",
      title: "Friction 3",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "15:00",
      published: true,
      description: "Introduction to frictional forces and their effects.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "dyn-2-lec-6-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "work-energy-live-1",
      title: "Live Class",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      published: false,
      description: "Live class on work and energy.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
    },
    {
      _id: "work-energy-live-2",
      title: "Live Class",
      videoUrl: "https://www.youtube.com/watch?v=5sKah3pJnHI&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      published: false,
      description: "Live class on work and energy.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
    },
    {
      _id: "work-energy-3-lecture-1",
      title: "Introduction to Work and Energy",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "10:00",
      published: true,
      description: "Introduction to work and energy and their relationship.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "work-3-lec-1-quiz-1" },
        { quizNo: 2, quizId: "work-3-lec-1-quiz-2" }
      ],
      completed: false
    },
    {
      _id: "work-energy-3-lecture-2",
      title: "Work Done",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "20:00",
      published: true,
      description: "Explanation of work done and its calculation.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "work-energy-3-lecture-3",
      title: "Potential Energy",
      videoUrl: "https://www.youtube.com/watch?v=w4QFJb9a8vo",
      duration: "15:00",
      published: true,
      description: "Introduction to potential energy and its types.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "work-3-lec-3-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "work-energy-3-lecture-4",
      title: "Introduction to Work and Energy 2",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "10:00",
      published: true,
      description: "Introduction to work and energy and their relationship.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "work-energy-3-lecture-5",
      title: "Work Done 2",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "20:00",
      published: true,
      description: "Explanation of work done and its calculation.",
      references: [{
        _id: "reference-001",
        title: "Reference 01",
        url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
      },
      {
        _id: "reference-002",
        title: "Reference 02",
        url: "https://www.mathsisfun.com"
      },],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "work-energy-3-lecture-6",
      title: "Potential Energy 2",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "15:00",
      published: true,
      description: "Introduction to potential energy and its types.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "work-3-lec-6-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "gravitation-live-1",
      title: "Live Class",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      published: false,
      description: "Live class on gravitation.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
    },
    {
      _id: "gravitation-live-2",
      title: "Live Class",
      videoUrl: "https://www.youtube.com/watch?v=5sKah3pJnHI&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "1:00:00",
      published: false,
      description: "Live class on gravitation.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false,
      isLive: true,
      liveDate: new Date("2024-01-01").toISOString(),
    },
    {
      _id: "gravitation-4-lecture-1",
      title: "Introduction to Gravitation",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "10:00",
      published: true,
      description: "Introduction to gravitation and its importance.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "grav-4-lec-1-quiz-1" }
      ],
      completed: false
    },
    {
      _id: "gravitation-4-lecture-2",
      title: "Gravitational Constant",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "20:00",
      published: true,
      description: "Explanation of the gravitational constant and its uses.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [],
      completed: false
    },
    {
      _id: "gravitation-4-lecture-3",
      title: "Introduction to Gravitation 2",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "10:00",
      published: true,
      description: "Introduction to gravitation and its importance.",
      references: [],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "grav-4-lec-3-quiz-1" },
        { quizNo: 2, quizId: "grav-4-lec-3-quiz-2" }
      ],
      completed: false
    },
    {
      _id: "gravitation-4-lecture-4",
      title: "Gravitational Constant with the numbers of gravitation and many other things that i dont know",
      videoUrl: "https://www.youtube.com/watch?v=1l8v8gj7cKk&list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk",
      duration: "20:00",
      published: true,
      description: "Explanation of the gravitational constant and its uses.",
      references: [
        {
          _id: "reference-001",
          title: "Reference 01",
          url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
        },
        {
          _id: "reference-002",
          title: "Reference 02",
          url: "https://www.mathsisfun.com"
        },
      ],
      academicYear: "2023-2024",
      quizzes: [
        { quizNo: 1, quizId: "grav-4-lec-4-quiz-1" }
      ],
      completed: false
    }
  ],


  quizzes: [
    {
      _id: "vec-1-lec-1-quiz-1",
      title: "Introduction to Vectors Quiz",
      duration: 300,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
    {
      _id: "vec-1-lec-2-quiz-1",
      title: "Vector Addition Quiz",
      duration: 30,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
    {
      _id: "vec-1-lec-3-quiz-1",
      title: "Vector Subtraction Quiz",
      duration: 30,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
    {
      _id: "vec-1-lec-3-quiz-2",
      title: "Vector Subtraction Quiz 2",
      duration: 30,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
    {
      _id: "dyn-2-lec-1-quiz-1",
      title: "Introduction to Dynamics Quiz",
      duration: 30,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
    {
      _id: "dyn-2-lec-2-quiz-1",
      title: "Newton's Laws of Motion Quiz",
      duration: 30,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
    {
      _id: "dyn-2-lec-4-quiz-1",
      title: "Newton's Laws of Motion Quiz 2",
      duration: 30,
      questions: [
        { questionNo: 1, id: "question1" },
        { questionNo: 2, id: "question2" }
      ]
    },
  ],


  questions: [
    {
      _id: "question1",
      question: "What is TypeScript?",
      options: [
        "A programming language",
        "A superset of JavaScript",
        "A database system",
        "A web framework"
      ],
      correctAnswer: "A superset of JavaScript"
    },
    {
      _id: "question2",
      question: "Which of the following is a benefit of using TypeScript?",
      options: [
        "Slower development time",
        "Less code readability",
        "Static typing",
        "Smaller file sizes"
      ],
      correctAnswer: "Static typing"
    }
  ],


  instructors: [
    {
      _id: "tushar-iut13",
      instructorImage: "https://placehold.co/600x400",
      name: "Tushar Chowdhury",
      email: "tushar13@yahoo.com",
      phone: "+1234567890",
      bio: "I am a Computer Science graduate from IUT. I have been teaching programming for 9 years.",
      experience: "9 years",
      courses: [
        { courseId: "physics-cycle-1" }
      ]
    },
    {
      _id: "alamin-buet15",
      instructorImage: "https://placehold.co/600x400",
      name: "Alamin Ahmed",
      email: "alamin@yahoo.com",
      phone: "+1234567890",
      bio: "I am a Computer Science graduate from BUET. I have been teaching programming for 7 years.",
      experience: "7 years",
      courses: [
        { courseId: "physics-cycle-1" }
      ]
    },
    {
      _id: "prince-bup19",
      instructorImage: "https://placehold.co/600x400",
      name: "Prince Ahmed",
      email: "prince@yahoo.com",
      phone: "+1234567890",
      bio: "I am a Computer Science graduate from BUP. I have been teaching programming for 5 years.",
      experience: "5 years",
      courses: [
        { courseId: "chemistry-cycle-1" }
      ]
    },
  ]
};