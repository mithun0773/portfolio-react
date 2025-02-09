import CTA from './CTA';
import './Header.css';
import ME from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
       <div className="container header_container">
        <h5>Hello</h5>
        <h1>I'm Mithun K</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
<HeaderSocials />
        <div className='me'>
          <img src={ME} alt='"' />
        </div>


        <a href='#contact' className='scroll_down'>Scroll Down </a>
        </div> 
    </header>
  )
}

export default Header