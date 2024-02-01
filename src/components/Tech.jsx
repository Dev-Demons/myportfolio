import { BallCanvas } from './canvas'
import { SectionWrapper } from '../HigherOrderComponents'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, idx) => (
        <div className="w-20 h-20 flex flex-row flex-wrap justify-center mt-5 text-center" key={'tech_' + idx}>
          <img src={technology.icon} ></img>
          <span>{technology.name}</span>

        </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech, "tech");