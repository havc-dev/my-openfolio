import Slider from "react-slick";

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from "../../components/Button/Button";
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/layout/Header';

import './Projects.css'

const Projects = (props) => {

    const { info } = props;
    const { title, projects, button } = info;
    const { className, icon, btn_text, type} = button;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    
    return (
        <div className="projects-wrapper">
            <NavBar />
            <main className="projects">
                <Header title={title}/>
                <p>*Swipe left or right to navigate through projects</p>
                <Slider {...settings}>
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
                </Slider>
            </main>
            <Button 
                className={className}
                icon={icon}
                btn_text={btn_text}
                type={type}
            />
        </div>
    )
}

export default Projects
