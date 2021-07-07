import Picture from './Picture';

import './Images.css';

const Images = (props) => {

    const { images } = props;

    return (
        <div className="images">
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
        </div>
    )
}

export default Images
