import './Picture.css'

const Picture = (props) => {

    const { title, webp, jpg } = props;
    const url_webp = `/assets/images/webp/img/projects/${webp}`;
    const url_jpg = `/assets/images/img/projects/${jpg}`;
    return (
        <picture className="project-pictures">
            <source srcSet={url_webp} type="image/webp" />
            <img className="project-picture" src={url_jpg} type="image/jpg" alt={title} />
        </picture>
    )
}

export default Picture
