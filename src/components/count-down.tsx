import React, { useState, useEffect } from "react"

interface CountDownProps {
  targetDate: string // ISO string
}

const CountDown: React.FC<CountDownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        if (days > 1) {
          return `${days} days`
        } else if (hours > 1) {
          return `${hours} hours`
        } else if (minutes > 1) {
          return `${minutes} minutes`
        } else {
          return `${seconds} seconds`
        }
      }
      return "Live now!"
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className='absolute bottom-0 right-0 bg-[#d31d2d] bg-opacity-70 text-white px-2 py-1 text-xs font-bold'>
      {timeLeft}
    </div>
  )
}

export default CountDown
