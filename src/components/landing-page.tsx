import React from "react"
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FiBook, FiHeart, FiBriefcase, FiAward } from "react-icons/fi"

const LandingPage: React.FC = () => {
  const planeVariants = {
    initial: { x: "-100vw", y: 0 },
    animate: {
      x: "100vw",
      y: [0, -50, 0, 50, 0],
      transition: {
        x: { duration: 10, repeat: Infinity, repeatType: "loop" },
        y: { duration: 5, repeat: Infinity, repeatType: "reverse" },
      },
    },
  }

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
  }

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" },
    tap: { scale: 0.95 },
  }

  const cards = [
    { title: "HSC", Icon: FiBook, href: "/courses" },
    { title: "SSC", Icon: FiBriefcase, href: "/courses" },
    { title: "Engineering", Icon: FiHeart, href: "/courses" },
    { title: "Medical", Icon: FiAward, href: "/courses" },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#b2ffff] to-[#87CEEB] flex flex-col items-center justify-center p-4 overflow-hidden relative animate-bg font-sans'>
      <div className='absolute top-4 right-4 flex items-center justify-center space-x-2 sm:space-x-4'>
        <motion.a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          whileHover='hover'
          variants={socialIconVariants}
        >
          <FaFacebook size={24} className='text-blue-600' />
        </motion.a>
        <motion.a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
          whileHover='hover'
          variants={socialIconVariants}
        >
          <FaYoutube size={26} className='text-red-600' />
        </motion.a>
        <motion.a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          whileHover='hover'
          variants={socialIconVariants}
        >
          <FaInstagram size={24} className='text-pink-600' />
        </motion.a>
      </div>

      <motion.img
        src='trans-logo.png'
        alt='Shongkolpo'
        className='w-48 sm:w-48 md:w-64 mb-4 sm:mb-8 mt-16 sm:mt-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className='container mx-auto flex flex-col items-center justify-between px-4'>
        <div className='text-center'>
          <motion.h3
            className='mx-auto mb-6 text-lg sm:text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            We make learning engaging & effective, so that you are ready to
            achieve your goals.
          </motion.h3>

          <motion.div
            className='mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                Icon={card.Icon}
                href={card.href}
              />
            ))}
          </motion.div>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          className='text-center mt-8 sm:mt-12'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.h1
            className='text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 text-center tracking-wide'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              FULL EXPERIENCE
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              COMING SOON
            </motion.span>
          </motion.h1>

          <motion.p
            className='text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Get ready! Something really cool is coming!
          </motion.p>
        </motion.div>

        {/* Facebook and YouTube buttons */}
        <div className='text-white text-center mb-8 w-full max-w-md'>
          <motion.a
            href='https://www.facebook.com/example-group'
            target='_blank'
            rel='noopener noreferrer'
            className='block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg text-base sm:text-lg font-bold transition duration-300 mb-4 sm:mb-6 items-center justify-center'
            variants={buttonVariants}
            initial='rest'
            whileHover='hover'
            whileTap='tap'
          >
            <div className='text-white flex items-center justify-center gap-2 sm:gap-4'>
              <FaFacebook size={20} />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                Join Facebook Group
              </motion.span>
            </div>
          </motion.a>

          <motion.a
            href='https://www.youtube.com/channel/example-channel'
            target='_blank'
            rel='noopener noreferrer'
            className='z-50 block bg-gradient-to-r from-rose-500 to-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg text-base sm:text-lg font-bold transition duration-300 items-center justify-center'
            variants={buttonVariants}
            initial='rest'
            whileHover='hover'
            whileTap='tap'
          >
            <div className='text-white flex items-center justify-center gap-2 sm:gap-4'>
              <FaYoutube size={20} />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6, duration: 0.5 }}
              >
                Subscribe on YouTube
              </motion.span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Animated paper airplanes */}
      <motion.div
        className='absolute text-3xl sm:text-5xl'
        variants={planeVariants}
        initial='initial'
        animate='animate'
        style={{ top: "20%" }}
      >
        ✈️
      </motion.div>

      <motion.div
        className='absolute text-2xl sm:text-4xl'
        variants={planeVariants}
        initial='initial'
        animate='animate'
        style={{ top: "60%" }}
      >
        🛩️
      </motion.div>
    </div>
  )
}

const Card = ({
  title,
  Icon,
  href,
}: {
  title: string
  Icon: React.ElementType
  href: string
}) => (
  <a
    href={href}
    className='group relative w-full overflow-hidden rounded border-[1px] border-slate-300 bg-white p-3 sm:p-4 block'
  >
    <div className='absolute inset-0 translate-y-[101%] transform bg-gradient-to-r from-cyan-400 to-cyan-600 transition-transform duration-300 ease-in-out will-change-transform group-hover:translate-y-0' />
    <Icon className='absolute -right-8 sm:-right-12 -top-8 sm:-top-12 z-10 text-6xl sm:text-9xl text-slate-100 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:text-cyan-400' />
    <div className='relative z-10'>
      <Icon className='mb-1 sm:mb-2 text-xl sm:text-2xl text-cyan-500 transition-colors duration-500 ease-in-out group-hover:text-white' />
      <h2 className='text-base sm:text-lg font-medium text-slate-950 transition-colors duration-300 ease-in-out group-hover:text-white'>
        {title}
      </h2>
    </div>
  </a>
)

export default LandingPage