import Slider from "react-slick";

import Picture from '../Images/Picture';
import Link from '../Link/Link';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import UsedTools from '../UsedStack/UsedTools';

import './ProjectCard.css'

    const ProjectCard = (props) => {
    const { title, images, description, tools, github_link, live_link } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
        <div className="project-card" key={title}>
            <h2>{title}</h2>
            <div className="project-info">
                <div className="project-imgbtns">
                    <Slider {...settings}>
                        {images.map((picture) =>
                            <Picture
                                key={picture.title}
                                title={picture.title}
                                description={picture.description}
                                avif={picture.avif}
                                webp={picture.webp}
                                png={picture.png}
                                jpg={picture.jpg}
                            />
                        )}
                    </Slider>
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
        </Slider>
    )
}

export default ProjectCard
