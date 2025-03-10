import {
  FeaturedModels,   
  DrivingExperience, 
  BMWServices,      
  LimitedEdition,    
  OwnerTestimonials, 
  StayUpdated,      
  Hero,
  Footer
} from "./sections/index"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:sm:pl-16 cl:pl-8 wide:sm:pr-16 wide:pr-8 sm:pb-24 pb-12">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <FeaturedModels />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <DrivingExperience />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <BMWServices />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <LimitedEdition />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-dark-gray">
        <OwnerTestimonials />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
        <StayUpdated />
      </section>
      <section className="sm:px-1 px-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
