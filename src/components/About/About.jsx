import './About.css';
import ME from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
<section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME} alt='' />
      </div>
    </div>
    <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
          <h5>Experience</h5>
          <FaAward className='about_icon' />
          <small>3+ Years Working</small>
        </article>
        <article className="about_card">
          <h5>Clients</h5>
          <FiUsers className='about_icon' />
          <small>300+ Clients World Wide</small>
        </article>
        <article className="about_card">
          <h5>Projects</h5>
          <VscFolderLibrary className='about_icon' />
          <small>3+ Projects Completed</small>
        </article>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste aut amet deleniti voluptatibus porro tempora nisi recusandae molestiae aliquid dolore, impedit unde enim doloremque inventore consectetur, corporis facere ad?
      </p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>
</section>  )
}

export default About