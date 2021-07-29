import Slider from "react-slick";
import Picture from '../Images/Picture';
import Link from '../Link/Link';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import UsedTools from '../UsedStack/UsedTools';

import './ProjectCard.css'

    const ProjectCard = (props) => {

    const { title, images, description, tools, github_link, live_link } = props;

    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000
    };
        
        return (
            <div className="project-card" key={title}>
            <h4>{title}</h4>
            <div className="project-info">
                <div className="project-imgbtns">
                    <div id="pictures-carousel" className="project-images-carousel">
                        <Slider {...sliderSettings}>
                        {images.map((image) =>
                            <Picture
                                key={image.title}
                                title={image.title}
                                description={image.description}
                                webp={image.webp}
                                jpg={image.jpg}
                            />
                        )}
                        </Slider>
                    </div>
                    <div className="project-links">
                        {!github_link ? null : <Link link={github_link} className="github"/>}
                        {!live_link ? null : <Link link={live_link} className="live"/>}
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
