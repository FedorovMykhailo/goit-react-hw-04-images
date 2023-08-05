import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageGaleryItem extends Component {
    render() {
        const {image, alt, onClick } = this.props;
        return  <>
                    <li className="ImageGalleryItem">
                        <img className="ImageGalleryItem-image" src={image} alt={alt} onClick={onClick} />
                    </li>
                </>
    }
}

ImageGaleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGaleryItem