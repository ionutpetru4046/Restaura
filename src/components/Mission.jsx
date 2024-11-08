import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import { MISSION } from "../constants"
import { motion } from "framer-motion"

const Mission = () => {
  return (
    <section id="mission">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl lg:text-4xl">Out Mission</h2>
          <div className="relative flex items-center justify-center">
            <motion.video className="w-full rounded-3xl" autoPlay muted loop 
            playsInline 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            poster={missionImg}>
              <source src={mission} type="video/mp4" />
            </motion.video>
            <div className="absolute h-full w-full rounded-3xl bg-black/40">
            </div>
            <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
              {MISSION}
            </p>
          </div>
        </div>
    </section>
  )
}

export default Mission
