import PropTypes from "prop-types";

const ImageGaleryItem = ( {image, alt, onClick } ) => {
        return (<li className="ImageGalleryItem">
                    <img className="ImageGalleryItem-image" src={image} alt={alt} onClick={onClick} />
                </li>)
}

ImageGaleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGaleryItem