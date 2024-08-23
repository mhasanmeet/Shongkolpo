import { useState } from "react"
import { getAllPublishedCourses } from "lib/utils/helpers"
import { AiOutlineMenuFold } from "react-icons/ai"
import { IoCloseCircleOutline } from "react-icons/io5"

const CourseNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const courses = getAllPublishedCourses()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='container mx-auto px-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='hidden md:block'>
          <ul className='flex items-center space-x-8'>
            {courses.map((course, index) => (
              <li key={index}>
                <a
                  href={`/${course._id}`}
                  className='hover:text-[#5FB6BE] hover:underline text-sm font-semibold'
                >
                  {course.navbarTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:hidden'>
          <button
            className='outline-none mobile-menu-button'
            onClick={toggleMenu}
          >
            <AiOutlineMenuFold size={22} />
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='p-6'>
          <button
            className='absolute top-4 right-4 text-gray-600'
            onClick={toggleMenu}
          >
            <IoCloseCircleOutline size={24} />
          </button>
          <ul className='mt-12 space-y-2'>
            {courses.map((course, index) => (
              <li key={index} className='bg-gray-100 p-2 rounded-sm'>
                <a
                  href={`/${course._id}`}
                  className='hover:text-[#5FB6BE] hover:underline text-sm font-semibold'
                  onClick={toggleMenu}
                >
                  {course.navbarTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default CourseNavbar
