import Skill from "../Skill/Skill";


import './MyStack.css'

const Stack = (props) => {
    
    const { stack } = props;
    return (
        
        <div className="skills-wrapper">
            <h2>My Current Stack</h2>
            <div className="my-skills">
                {stack.map((skill) =>
                    <Skill
                        key={skill.index}
                        index={skill.index}
                        icon={skill.icon}
                        skill={skill.tool}
                    />
                )}
            </div>
        </div>
    )
}

export default Stack