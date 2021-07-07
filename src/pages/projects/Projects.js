import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from "../../components/Button/Button";

import './Projects.css'
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/layout/Header';

const Projects = (props) => {

    const { info } = props;
    const { title, projects, button } = info;
    const { className, icon, btn_text, type} = button;

    return (
        <div className="projects-wrapper">
        <NavBar />
        <main className="projects">
            <Header title={title} />
            <div className="projects-container">
                {projects.map((project) =>
                    <ProjectCard
                        key={project.project_title}
                        title={project.project_title}
                        description={project.description}
                        images={project.images}
                        tools={project.used_tools}
                        github_link={project.github_link}
                        live_link={project.live_link}
                    />
                )}
            </div>
            <Button 
                className={className}
                icon={icon}
                btn_text={btn_text}
                type={type}
            />
        </main>
        </div>
    )
}

export default Projects
