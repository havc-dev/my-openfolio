import Images from '../Images/Images';
import Link from '../Link/Link';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import UsedTools from '../UsedStack/UsedTools';

import './ProjectCard.css'

const ProjectCard = (props) => {

    const { title, images, description, tools, github_link, live_link } = props;

    return (
        <div className="project-card" key={title}>
            <h2>{title}</h2>
            <div className="project-info">
                <div className="project-imgbtns">
                    <Images images={images}/>
                    <div className="project-links">
                        {!github_link ? null : <Link link={github_link}/>}
                        {!live_link ? null : <Link link={live_link}/>}
                    </div>
                </div>
                <div className="project-description">
                    <ProjectInfo description={description} tools={tools}/>
                    <UsedTools tools={tools}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
