import { getAllLiveClasses } from "lib/utils/helpers"
import LiveClassCard from "./live-class-card"

const LiveClasses = () => {
  const classes = getAllLiveClasses()

  return (
    <div className='flex flex-wrap gap-4'>
      {classes.map((live) => (
        <LiveClassCard key={live._id} live={live} />
      ))}
    </div>
  )
}

export default LiveClasses
