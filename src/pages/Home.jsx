import Mv from '../components/Mv'
import About from '../components/About'
import Works from '../components/Works'
import Contact from '../components/Contact'
//data
import { works, personalProjects } from '../assets/data/data';

const Home = () => {
  return (
    <main>
        <Mv/>
        <About/>
        <Works data={works} title='WORKS'/>
        <Works data={personalProjects} title='PERSONAL PROJECTS'/>
        <Contact/>
    </main>
  )
}
export default Home