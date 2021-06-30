import Main from '../../components/layout/Main';
import NavBarSpacer from '../../components/layout/NavBarSpacer';

import MyStack from "../../components/MyStack/MyStack";
import CallToAction from '../../components/CallToAction/CallToAction';

import './About.css'


const About = (props) => {
  
  const { info } = props;
  const { title, subtitle, location, aboutMeP1, aboutMeP2, stack, button } = info;
  const { className, icon, btn_text, type} = button;

  return (
    <>
      <Main>
      <NavBarSpacer />
          <div className="about-me">
              <div className="header">
                <div className="title">
                  <h1>{title}</h1>
                </div>
                <div className="subtitle">
                  <h2>{subtitle}, living in <span className="subtitle-location">{location}</span></h2>
                </div>
              </div>
              <div className="text">
                <p>{aboutMeP1}</p>
                <br />
                <p>{aboutMeP2}</p>
              </div>
              <MyStack  stack={stack}/>
              <CallToAction
              className={className}
              icon={icon}
              btn_text={btn_text}
              type={type}
              />
          </div>
      </Main>
      </>
  )
}

export default About
