import TailwindIcon from '../Icons/TailwindIcon';
import './Skill.css';

const Skill = (props) => {
    
    
    const { skill, icon, index } = props;
    const classes = `skill-icon ${icon}`

    if (icon === "tailwind") {
        return (
            <div className="skill-wrapper">
                <TailwindIcon />
                <p className="skill-text">{skill}</p>
            </div>
        )
    }
    return (
        <div className="skill-wrapper" key={index}>
            <i className={classes}></i>
            <p className="skill-text">{skill}</p>
        </div>
    )
}

export default Skill
