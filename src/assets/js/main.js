$(document).ready(function() {

 $('.product-tabs__link').on('click', function(e){
  e.preventDefault();
  $('.product-tabs__link').removeClass('product-tabs__link--active');
  $(this).addClass('product-tabs__link--active');
  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active');
 });

 $('.product__thumb').slick({
  asNavFor: '.product__big',
  focusOnSelect: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  draggable: false
 });
 $('.product__big').slick({
  asNavFor: '.product__thumb',
  draggable: false,
  arrows: false,
  fade: true
 });

 $('.slider__inner').slick ({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 });

 $('.button-list').on('click', function(){
  $('.products__item').addClass('products__item--list');
 });

 $('.button-grid').on('click', function(){
  $('.products__item').removeClass('products__item--list');
 });

 $('.shop__content-btn').on('click', function() {
  $('.shop__content-btn').removeClass('shop__content-btn--active');
  $(this).addClass('shop__content-btn--active');
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
 
 $('.products__star, .product__star').rateYo({
   starWidth: "17px",
   normalFill: "#ccccce",
   retedFill: "#ffc35b"
 });

});