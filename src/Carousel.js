import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    }

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    // propTypes = {
    //   slides: this.propTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
    //     .isRequired,
    // };
  }

  handlePrevClick() {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({
       slideIndex: (slideIndex + slides.length - 1) % slides.length, 
    }));
  };

  handleNextClick() {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({ 
      slideIndex: (slideIndex + 1) % slides.length, 
    }));
  };
  
  render() {
    const { slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
          Prev
        </CarouselButton>
        <CarouselButton data-action="next" onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;