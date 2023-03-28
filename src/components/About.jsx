import wave from '../assets/images/wave.svg';
import portrait from '../assets/images/portrait.png';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const[ ttlRef, inView] = useInView({
    rootMargin: '-50px', 
    triggerOnce: true, 
  })

  return (
    <section className="about bg section" id='about'>
        <div className="container">
            <h2 className="ttl">
                <span ref={ttlRef} className={inView && 'ttl-wave'}>ABOUT ME</span>
            </h2>
            <img src={portrait} alt="portrait" className='about-img'/>
            <p className="about-txt">A hardworking web developer with 2 years+ of experience, and a BA in software engineering. Proficient at HTML, CSS, and JavaScript-based web development. Own knowledge of React. Also experienced in web design. Look for a job opportunity mainly as a React developer since my interest of more complex and challenging development.</p>
        </div>
    </section>
  )
}
export default About