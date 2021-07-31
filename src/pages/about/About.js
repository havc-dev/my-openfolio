
import Header from "../../components/layout/Header";
import MyStack from "../../components/MyStack/MyStack";
import Button from "../../components/Button/Button";

import './About.css'

const About = (props) => {
  
  const { info } = props;
  const { title, subtitle, location, aboutMeP1, aboutMeP2, stack, button } = info;
  const { className, icon, btn_text, type} = button;

  return (
    <div className="page-wrapper">
      <main className="about">
        <div className="header">
          <Header title={title} subtitle={subtitle} location={location}/>
        </div>
        <div className="text">
          <p className="text-p">{aboutMeP1}</p>
          <br />
          <p className="text-p">{aboutMeP2}</p>
        </div>
        <MyStack  stack={stack}/>
        <Button
          className="extra-space"
          icon={icon}
          btn_text={btn_text}
          type={type}
        />
      </main>
    </div>
  )
}

export default About
