import Main from '../../components/layout/Main';
import NavBarSpacer from '../../components/layout/NavBarSpacer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CallToAction from "../../components/CallToAction/CallToAction";

import './Projects.css'

const Projects = (props) => {

    const { info } = props;
    const { title, projects, button } = info;
    const { className, icon, btn_text, type} = button;

    return (
        <>
        <Main>
        <NavBarSpacer />
            <div className="my-projects">
                <div className="header">
                    <div className="projects-title">
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="projects-container">
                {projects.map((project) =>
                    <ProjectCard
                        key={project.project_title}
                        title={project.project_title}
                        description={project.description}
                        images={project.images}
                        tools={project.used_tools}
                        link={project.link}
                    />
                )}
                </div>
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

export default Projects
