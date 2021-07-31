import Slider from "react-slick";

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from "../../components/Button/Button";
import Header from '../../components/layout/Header';

import './Projects.css';

const Projects = (props) => {
    const { info } = props;
    const { title, projects, button } = info;
    const { icon, btn_text, type} = button;

    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'prueba-slider',
    };
   
    return (
        <div className="page-wrapper">
            <main className="projects">
            <div className="header">
                <Header title={title}/>
            </div>
                <Slider {...sliderSettings}>
                    {projects.map((project, index) => {
                        return (
                        <ProjectCard
                            key={index}
                            title={project.project_title}
                            description={project.description}
                            images={project.images}
                            tools={project.used_tools}
                            github_link={project.links.github_link}
                            live_link={project.links.live_link}
                        />
                        )}
                    )}
                </Slider>
                <Button 
                    className="extra-space"
                    icon={icon}
                    btn_text={btn_text}
                    type={type}
                />
            </main>
        </div>
    )
}

export default Projects
