import Images from '../Images/Images';
import Link from '../Link/Link';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import UsedTools from '../UsedStack/UsedTools';

import './ProjectCard.css'

const ProjectCard = (props) => {

    const { title, images, description, tools, link } = props;

    return (
        <div className="project-card" >
            <div className="project-title">
                <h2>{title}</h2>
            </div>
            <div className="project-info">
                <div className="project-info__images">
                    <Images images={images}/>
                    <Link link={link}/>
                </div>
                <div className="project-info__description">
                    <ProjectInfo description={description} tools={tools}/>
                    <UsedTools tools={tools}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
