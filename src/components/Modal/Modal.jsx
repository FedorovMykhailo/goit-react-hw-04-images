import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {

    
    componentDidMount() {
        document.addEventListener("keydown",this.handleModalClose )
    }
    
    componentWillUnmount (){
        document.removeEventListener("keydown",this.handleModalClose)
    }

    handleModalClose = (evt) => {
         this.props.clickOverlay(evt) 
    }

    render() {
        const {img, desc, clickOverlay} = this.props
        return  <div className="Overlay" onClick={clickOverlay} >
                    <div className="Modal">
                        <img src={img} alt={desc} />
                    </div>
                </div>
    }
}

Modal.propTypes = {
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    clickOverlay: PropTypes.func.isRequired,
}

export default Modal