import PropTypes from "prop-types";

const Button = ( {clickLoadMore} ) => {
        return <button className="Button" onClick={clickLoadMore}> Load More ...</button> 
}

Button.propTypes = {
    clickLoadMore: PropTypes.func.isRequired,
}

export default Button