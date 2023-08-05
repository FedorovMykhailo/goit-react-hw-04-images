import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        const {clickLoadMore } = this.props;
        return  <>
                    <button className="Button" onClick={clickLoadMore}> Load More ...</button>
                </>
    }
}

Button.propTypes = {
    clickLoadMore: PropTypes.func.isRequired,
}

export default Button