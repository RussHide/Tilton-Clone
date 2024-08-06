import { AboutUs, Amenities, Contact, Footer, Gallery, Hero, Navbar, Purpose } from "./Components"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Purpose />
      <AboutUs />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App