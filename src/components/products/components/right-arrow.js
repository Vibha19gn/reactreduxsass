import React, {Component} from 'react';
import PropTypes from "prop-types";

class RightArrow extends Component {
  render() {
    return (
      <i className="fa fa-arrow-right fa-2x carousel__arrow carousel__right-arrow" aria-hidden="true"
         onClick={this.props.onClick}>
      </i>
    );
  }
}

RightArrow.propTypes = {
  onClick: PropTypes.func
};

export default RightArrow;



