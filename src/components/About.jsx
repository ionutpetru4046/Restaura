import about from "../assets/about.jpeg"
import { ABOUT } from "../constants"

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
          About Us
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <img src={about} className="rounded-3xl lg:-rotate-3" />  
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <h2 className="text-4xl tracking-tighter lg:text-6xl">
              {ABOUT.header}
            </h2>
          </div>
        </div>
    </section>
  )
}

export default About
