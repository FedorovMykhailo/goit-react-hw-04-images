import React, { Component } from "react";
import ImageGaleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from "prop-types";

class ImageGalery extends Component {
    render() {
        const { galeryItems, onModalClick} = this.props;
        const gal = galeryItems.map((item) => {
            return <ImageGaleryItem
                key={item.id}
                image={item.largeImageURL}
                alt={item.tags}
                onClick = {onModalClick}
            ></ImageGaleryItem>
        })
        return  <>
                    <ul className="ImageGallery">
                        {gal}
                    </ul>
                </>
    }
}

ImageGalery.propTypes = {
    galeryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    onModalClick: PropTypes.func.isRequired,
}

export default ImageGalery