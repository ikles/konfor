jQuery(function() {

  jQuery('.mini-cart .titlecart').html('Корзина');


  jQuery('.owl-wrapper-outer .owl-item .item-content').each(function(){
      jQuery(this).find('.box-des').remove();
      //jQuery(this).children("img.timeline_icon").prependTo(jQuery(this));
    });

  




});