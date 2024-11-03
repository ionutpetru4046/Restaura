import Dishes from "./components/Dishes"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/NavBar"

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
    </main>
  )
}

export default App
