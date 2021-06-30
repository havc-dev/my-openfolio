import './Skill.css';

const Skill = (props) => {
    
    const { skill, icon, index } = props;
    const classes = `skill-icon ${icon}`

    return (
        <div className="skill-wrapper" key={index}>
            <i className={classes}></i>
            <h4>{skill}</h4>
        </div>
    )
}

export default Skill
