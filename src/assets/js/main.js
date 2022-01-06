$(document).ready(function() {
 $('.slider__inner').slick ({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 });


$('.filter-price__field').ionRangeSlider({
 type: "double",
 min: 0,
 max: 999,
 prefix: $,
 onStart: function (data) {
  $('.filter-price__from').text(data.from);
  $('.filter-price__to').text(data.to);
 },
 onChange: function (data) {
  $('.filter-price__from').text(data.from);
  $('.filter-price__to').text(data.to);
 },
});
 
 $(".products__star").rateYo({
   rating: 3.6
 });


});