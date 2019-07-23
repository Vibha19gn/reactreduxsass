import React, {Component} from 'react';
import PropTypes from "prop-types";
import LeftArrow from './components/left-arrow';
import RightArrow from './components/right-arrow';
import CarouselSlide from './components/carousel-slide';

class Products extends Component {
  constructor(props) {
    super(props);
    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.filterImages = this.filterImages.bind(this);
    this.state = {
      activeIndex: 0,
      filteredProducts: []
    };
  }

  componentDidMount() {
    const {
      fetchProducts
    } = this.props;
    fetchProducts();
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {products} = this.props;
    let slidesLength = products.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {products} = this.props;
    let slidesLength = products.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);
    const {
      products
    } = nextProps
    // if(products === null) {
    //   return {
    //     filteredProducts : products
    //   }
    // }
    // return null;
    // const {
    //   filteredProducts
    // } = prevState;
    // const {
    //   tabs
    // } = nextProps;
    // if (!productList) {
    //
    // }
    // return null;
  }

  filterImages(e, clear) {
    console.log("e==", e, e.target.innerHTML);
    const {
      productList
    } = this.props.products || {};
    if(clear) {
      this.setState({
        filteredProducts: productList
      });
    } else {
      const filterBy  = e.target.innerHTML;
      const list =  productList.filter((product) => {
        return product.category === filterBy
      });
      this.setState({
        filteredProducts: list
      });
    }

  }

  render() {
    const {
        productList,
        categories
    } = this.props.products || {};
    return (
      <div className="wrapper">
        {productList &&
        <ul className="tags">
          {
            categories.map((category, index) =>
              <li
                className="tag"
                onClick={this.filterImages}
                key={index}>{category}</li>
            )
          }
          <li onClick={this.filterImages.bind(null, true)}>clear</li>
        </ul>
        }
        {productList &&
        <div className="carousel">
          <LeftArrow onClick={this.goToPrevSlide}/>
          <ul className="carousel__slides">
            {productList.map((product, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                image={product.image}
              />
            )}
          </ul>
          <RightArrow onClick={this.goToNextSlide}/>
        </div>
        }
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array
};

export default Products;
