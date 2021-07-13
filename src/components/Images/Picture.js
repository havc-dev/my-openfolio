import './Picture.css'

const Picture = (props) => {

    const { title, description, avif, webp, png, jpg } = props;
    const url_avif = `/assets/images/projects/${avif}`;
    const url_webp = `/assets/images/projects/${webp}`;
    const url_png = `/assets/images/projects/${png}`;
    const url_jpg = `/assets/images/projects/${jpg}`;

    return (
        <picture className="project-pictures">
            <source srcSet={url_avif} type="image/avif" />
            <source srcSet={url_webp} type="image/webp" />
            <source srcSet={url_png} type="image/png" />
            <img src={url_jpg} type="image/jpg" alt={title} />
            <figcaption>{description}</figcaption>
        </picture>
    )
}

export default Picture
