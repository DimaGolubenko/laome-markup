import $ from "jquery";
import "slick-carousel";

$(".hero-slider__list").slick({
  dots: true,
  appendDots: $(".hero-slider__dots"),
  prevArrow: $(".hero-slider__arrow-left"),
  nextArrow: $(".hero-slider__arrow-right"),
});
