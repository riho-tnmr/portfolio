import { useState } from 'react';
import {HashLink} from 'react-router-hash-link';
import bars from '../assets/images/bars.svg'
import xmark from '../assets/images/xmark.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen? 'header open': 'header'}>
      {
        isOpen?
        <img src={xmark} alt="close" className='header-icon' onClick={() => {setIsOpen(!isOpen)}}/>
        :
        <img src={bars} alt="open" className='header-icon' onClick={() => {setIsOpen(!isOpen)}} />
      }
      <nav className='header-nav' >
          <ul className="header-list">
              <li className="header-item" key='0' onClick={() => {setIsOpen(!isOpen)}} ><HashLink to='/'>HOME</HashLink></li>
              <li className="header-item" key='1' onClick={() => {setIsOpen(!isOpen)}} ><HashLink  to='/#about'>ABOUT</HashLink></li>
              <li className="header-item" key='2' onClick={() => {setIsOpen(!isOpen)}} ><HashLink to='/#works'>WORKS</HashLink></li>
              <li className="header-item" key='3' onClick={() => {setIsOpen(!isOpen)}} ><HashLink to='#contact'>CONTACT</HashLink></li>
          </ul>
      </nav>
    </header>
  )
}
export default Header