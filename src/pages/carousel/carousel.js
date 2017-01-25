import React, {Component} from 'react';
import carouselData from './carouselData';


class Carousel extends Component {
  constructor(){
    super();
    this.state = {

    };
  }
  var carousel = document.getElementById('carousel');
  var slides = 4;
  var speed = 7000;

  static carouselHide(num) {
    document.indicators[num].setAttribute('data-state', '');
   document.slides[num].setAttribute('data-state', '');

    document.slides[num].style.opacity=0;
  }

  static carouselShow(num) {
    document.indicators[num].checked = true;
    document.indicators[num].setAttribute('data-state', 'active');
    document.slides[num].setAttribute('data-state', 'active');

    document.slides[num].style.opacity=1;
  }
  switchSlide() {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < document.indicators.length; i++) {
      // If current slide is active & NOT equal to last slide then increment nextSlide
      if ((document.indicators[i].getAttribute('data-state') === 'active') && (i !== (document.indicators.length-1))) {
        nextSlide = i + 1;
      }

      // Remove all active states & hide
      this.carouselHide(i);
    }

    // Set next slide as active & show the next slide
    this.carouselShow(nextSlide);
  }
    render() {
  if (carousel) {
        let slides = carousel.querySelectorAll('.slide');
        let indicators = carousel.querySelectorAll('.indicator');

        var switcher = this.setInterval(function() {
          this.switchSlide();
        }, speed);

        for (var i = 0; i < indicators.length; i++) {
          indicators[i].addEventListener("click", this.setSlide(i));
        }
      }

      return(
      <div className="content">
        <div id="carousel" class="carousel">
          <div class="slides">
            <div class="slide" data-state="active">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
          </div>
          <div class="indicators">
            <input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio"/>
            <input class="indicator" name="indicator" data-slide="2" type="radio"/>
            <input class="indicator" name="indicator" data-slide="3" type="radio"/>
          </div>
        </div>
      </div>
      )
    }

}
export default Carousel;
