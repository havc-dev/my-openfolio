import './Picture.css'

const Picture = ({ title, webp, jpg, isMobile }) => {

    const url_webp = `/assets/images/webp/projects/${webp}`;
    const url_jpg = `/assets/images/minifed/projects/${jpg}`;
    return (
        <picture className={isMobile ?  "project-pictures-wrapper mobile" : "project-pictures-wrapper regular"}>
            <source srcSet={url_webp} type="image/webp" />
            <img className={isMobile ?  "project-pictures mobile" : "project-pictures regular"} src={url_jpg} type="image/jpg" alt={title} />
        </picture>
    )
}

export default Picture
