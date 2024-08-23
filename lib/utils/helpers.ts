import type { Types } from "lib/types/types"
import { courseData } from "lib/data/lecture";

export const getAllCourses = (): Types.Course[] => {
    try {
        return courseData.courses;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAllPublishedCourses = (): Types.Course[] => {
    try {
        return courseData.courses.filter(course => course.status === "published");
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getCourseById = (id: Types.ObjectId): Types.Course | undefined => {
    try {
        return courseData.courses.find(course => course._id === id);
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export const getChaptersByCourseId = (id: Types.ObjectId): Types.Chapter[] | null => {
    try {
        const course = courseData.courses.find(course => course._id === id);
        if (!course) {
            return null;
        }
        const chapterIds = course.chapters.map(chapter => chapter.chapterID);
        return courseData.chapters.filter(chapter => chapterIds.includes(chapter._id));
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getChapterById = (id: Types.ObjectId): Types.Chapter | null => {
    try {
        return courseData.chapters.find(chapter => chapter._id === id) || null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getTopicsByChapterId = (id: Types.ObjectId): Types.Topic[] | null => {
    try {
        const chapter = courseData.chapters.find(chapter => chapter._id === id);
        if (!chapter) {
            return null;
        }
        const topicIds = chapter.topics.map(topic => topic.topicId);
        return courseData.topics.filter(topic => topicIds.includes(topic._id));
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getTopicById = (id: Types.ObjectId): Types.Topic | null => {
    try {
        return courseData.topics.find(topic => topic._id === id) || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getLecturesByTopicId = (id: Types.ObjectId): Types.Lecture[] | null => {
    try {
        const topic = courseData.topics.find(topic => topic._id === id);
        if (!topic) {
            return null;
        }
        const lectureIds = topic.lectures.map(lecture => lecture.lectureId);
        return courseData.lectures.filter(lecture => lectureIds.includes(lecture._id));
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getLectureById = (id: Types.ObjectId): Types.Lecture | null => {
    try {
        return courseData.lectures.find(lecture => lecture._id === id) || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getQuizById = (id: Types.ObjectId): Types.Quiz | null => {
    try {
        return courseData.quizzes.find(quiz => quiz._id === id) || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getQuestionsByQuizId = (id: Types.ObjectId): Types.Question[] | null => {
    try {
        const quiz = courseData.quizzes.find(quiz => quiz._id === id);
        if (!quiz) {
            return null;
        }
        const questionIds = quiz.questions.map(question => question.id);
        return courseData.questions.filter(question => questionIds.includes(question._id));
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getAllLiveClasses = (): Types.Lecture[] => {
    try {
        return courseData.lectures.filter(lecture =>
            lecture.isLive &&
            lecture.published
        );
    } catch (error) {
        console.error(error);
        return [];
    }
}


export const getCourseIdFromLectureId = (lectureId: string): string | undefined => {
    for (const course of courseData.courses) {
        for (const chapterRef of course.chapters) {
            const chapter = courseData.chapters.find(c => c._id === chapterRef.chapterID);
            if (chapter) {
                for (const topicRef of chapter.topics) {
                    const topic = courseData.topics.find(t => t._id === topicRef.topicId);
                    if (topic) {
                        if (topic.lectures.some(lec => lec.lectureId === lectureId)) {
                            return course._id;
                        }
                    }
                }
            }
        }
    }
    return undefined;
}

export const getChapterIdFromLectureId = (lectureId: string): string | undefined => {
    for (const chapter of courseData.chapters) {
        for (const topicRef of chapter.topics) {
            const topic = courseData.topics.find(t => t._id === topicRef.topicId);
            if (topic) {
                if (topic.lectures.some(lec => lec.lectureId === lectureId)) {
                    return chapter._id;
                }
            }
        }
    }
    return undefined;
}

export const getTopicIdFromLectureId = (lectureId: string): string | undefined => {
    for (const topic of courseData.topics) {
        if (topic.lectures.some(lec => lec.lectureId === lectureId)) {
            return topic._id;
        }
    }
    return undefined;
}