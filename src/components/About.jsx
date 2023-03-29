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
            <p className="about-txt">
              A hardworking web developer with a BS in software engineering and 2 years+ experience as a web designer/developer. I have a strong ability to continuously learn and improve my skills in order to deliver high-quality results under strict deadlines. This dedication has resulted in consistently receiving repeat orders from many of my clients as a freelance web designer. I am also passionate about UI/UX design and incorporate this into my web development work, allowing me to contribute to projects in a unique and valuable way.
              </p>
        </div>
    </section>
  )
}
export default About