import './Picture.css'

const Picture = (props) => {

    const { title, webp, jpg } = props;
    const url_webp = `./assets/img/${webp}`;
    const url_jpg = `./assets/img/${jpg}`;

    console.log(jpg)
    return (
        <picture className="project-pictures">
            <source srcSet={url_webp} type="image/webp" />
            <img src={url_jpg} type="image/jpg" alt={title} />
        </picture>
    )
}

export default Picture
