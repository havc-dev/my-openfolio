import Skill from "../Skill/Skill";

import './MyStack.css'

const Stack = (props) => {
    
    const { stack } = props;
    return (
        
        <div className="skills-wrapper">
            <h2 className="skills-title">My Current Stack</h2>
            <div className="my-skills">
                {stack.map((skill) =>
                    <Skill
                        key={skill.index}
                        index={skill.index}
                        icon={skill.icon}
                        skill={skill.tool}
                    />
                )}
                <Skill skill="Tailwind CSS"
                    icon={"tailwind"}
                />
            </div>
        </div>
    )
}

export default Stack
