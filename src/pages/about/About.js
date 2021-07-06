import MyStack from "../../components/MyStack/MyStack";

import './About.css'
import NavBar from '../../components/NavBar/NavBar';
import Header from "../../components/layout/Header";
import Button from "../../components/Button/Button";


const About = (props) => {
  
  const { info } = props;
  const { title, subtitle, location, aboutMeP1, aboutMeP2, stack, button } = info;
  const { className, icon, btn_text, type} = button;

  return (
    <div className="about-wrapper">
      <NavBar />
      <main className="about">
        {/* <div className="header">
            <h1 className="header-title">{title}</h1>
            <h2 className="header-subtitle">{subtitle}, living in <span className="subtitle-location">{location}</span></h2>
        </div> */}
        <Header title={title} subtitle={subtitle} location={location}/>
        <div className="text">
          <p className="text-p">{aboutMeP1}</p>
          <br />
          <p className="text-p">{aboutMeP2}</p>
        </div>
        <MyStack  stack={stack}/>
        <Button
        className={className}
        icon={icon}
        btn_text={btn_text}
        type={type}
        />
      </main>
    </div>
  )
}

export default About
