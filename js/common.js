jQuery(function() {

  jQuery('.mini-cart .titlecart').html('Корзина');



 
jQuery('.productdetails-view.productdetails .vm-price-value').prepend(jQuery('.box-container2 .availability.out-of-stock'));

jQuery('.productdetails-view .vina-des-wrapper .price-box .vm-price-value .PricesalesPrice').after(jQuery('.box-container2 .product-rating'));

jQuery('.product-field-display').parent().addClass('mla');

});