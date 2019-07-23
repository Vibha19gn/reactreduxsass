import React, {Component} from 'react';
import PropTypes from "prop-types";

class LeftArrow extends Component {
  render() {
    const {
      onClick
    } = this.props;
    return (
      <i className="fa fa-arrow-left fa-2x carousel__arrow carousel__left-arrow" aria-hidden="true"
        onClick={onClick}>
      </i>
    );
  }
}

LeftArrow.propTypes = {
  onClick: PropTypes.func
};

export default LeftArrow;
