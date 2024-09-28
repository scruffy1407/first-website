import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import About from "../../components/About/About"
import Project from "../../components/Project/Project"
// to add experience...
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

import"./First-Page.css"

function FirstPage() {
  return (
    <div className="body-main">
      <Navbar />
      <Hero />
      <About />
      <Project />
      {/* to add experience... */}
      <Contact />
      <Footer />
    </div>
  )
}

export default FirstPage