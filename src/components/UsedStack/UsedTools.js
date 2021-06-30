import Skill from "../Skill/Skill";

import './UsedTools.css'

const UsedTools = (props) => {
    
    const { tools } = props;

    return (
        
        <div className="used-tools">
            <div className="used-tools-title">
                <h3>Tools used:</h3>
            </div>
            <div className="used-tools-list">
                {tools.map((skill) =>
                    <Skill
                        key={skill.index}
                        icon={skill.icon}
                        skill={skill.tool}
                    />
                )}
            </div>
        </div>
    )
    
}

export default UsedTools