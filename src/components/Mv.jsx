//images
import css from '../assets/images/css.svg';
import figma from '../assets/images/figma.svg';
import html from '../assets/images/html.svg';
import javascript from '../assets/images/javascript.svg';
import react from '../assets/images/react.svg';
import wordpress from '../assets/images/wordpress.svg';
import xd from '../assets/images/xd.svg';
import photoshop from '../assets/images/photoshop.svg';

const Mv = () => {
  return (
    <section className="mv">
        <div className="container">
            <div className="mv-inner">
                <h1 className="mv-ttl mv-ttl__pc">
                    <span className='mv-ttl__line'>I’m Riho Tanimura,</span>
                    <span className='mv-ttl__line'>A <span className='mv-ttl__serif'>Web Developer</span> and <span className='mv-ttl__serif'>Designer</span></span>
                    <span className='mv-ttl__line'>from Japan, based in Israel.</span>
                </h1>
                <h1 className="mv-ttl mv-ttl__sp">
                    I’m Riho Tanimura,<br />
                    A <span className='mv-ttl__serif'>Web Developer</span> and <span className='mv-ttl__serif'>Designer</span> from Japan, based in Israel.
                </h1>
                <div className='mv-icons'>
                    <img src={javascript} alt="javascript" />
                    <img src={react} alt="react" />
                    <img src={html} alt="html" />
                    <img src={css} alt="css" />
                    <img src={wordpress} alt="wordpress" />
                    <img src={photoshop} alt="photoshop" />
                    <img src={xd} alt="xd" />
                    <img src={figma} alt="figma" />
                </div>
                <a href="#contact" className="mv-btn">CONTACT</a>
                
            </div>
        </div>
    </section>
  )
}
export default Mv