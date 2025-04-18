import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import { Toaster } from 'react-hot-toast'

function App() {

  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Works/>
      <Tech/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      <Toaster
        position={'top-right'}
        toastOptions={{ className: 'react-hot-toast' }}
      />
    </div>
   </BrowserRouter>
  )
}
{/* <Feedbacks/> */}

export default App;
