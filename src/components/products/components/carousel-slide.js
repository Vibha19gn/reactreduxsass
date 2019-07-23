import React, {Component} from 'react';

class CarouselSlide extends Component {

  render() {
    const {
      index,
      activeIndex,
      image
    } = this.props

    return (
      <li
        className={
          index == activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <section className="carousel-slide__content">
          <img src={image}/>
        </section>
      </li>
    );
  }
}

export default CarouselSlide;
