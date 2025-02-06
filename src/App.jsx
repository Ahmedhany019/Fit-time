import About from './components/About'
import Advantages from './components/Advantages'
import Footer from './components/Footer'
import Home from './components/Home'
import MemberShip from './components/MemberShip'
import Trainers from './components/Trainers'
import './index.css'

function App() {

  return (
    <div className='bg-black text-white overflow-x-hidden'>
      <div className='container mx-auto '>
        <Home />
        <Advantages />
        <MemberShip />
        <About />
        <Trainers />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
