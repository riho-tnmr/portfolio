import email from '../assets/images/mail.svg';
import linkdin from '../assets/images/linkdin.svg';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const[ ttlRef, inView] = useInView({
    rootMargin: '-50px', 
    triggerOnce: true, 
  })

  return (
    <section className="contact bg section" id='contact'>
        <div className="container">
            <h2 className="ttl"><span ref={ttlRef} className={inView && 'ttl-wave'}>CONTACT</span></h2>
            <p className="contact-txt">Looking forward to hearing from you<span>:)</span></p>
            <div className="contact-inner">
                <a href="mailto: riho.tanimura@gmail.com" target='_blank'><img src={email} alt="riho.tanimura@gmail.com" /></a>
                <a href="https://www.linkedin.com/in/riho-tanimura/" target='_blank'><img src={linkdin} alt="https://www.linkedin.com/in/riho-tanimura/" /></a>
            </div>
        </div>
    </section>
  )
}
export default Contact