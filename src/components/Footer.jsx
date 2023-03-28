import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          <li className="footer-item" key='1'><AnchorLink href='/'>HOME</AnchorLink></li>
          <li className="footer-item" key='2'><AnchorLink  href='#about'>ABOUT</AnchorLink></li>
          <li className="footer-item" key='3'><AnchorLink href='#works'>WORKS</AnchorLink></li>
          <li className="footer-item" key='4'><AnchorLink href='#contact'>CONTACT</AnchorLink></li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer