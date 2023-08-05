import { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({img, desc, clickOverlay}) => {
    useEffect(() => {
        document.addEventListener("keydown", clickOverlay)
        return ()=>{document.removeEventListener("keydown",clickOverlay)}
    },[clickOverlay])

        return  <div className="Overlay" onClick={clickOverlay} >
                    <div className="Modal">
                        <img src={img} alt={desc} />
                    </div>
                </div>
}

Modal.propTypes = {
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    clickOverlay: PropTypes.func.isRequired,
}

export default Modal