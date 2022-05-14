$(".box-video").on("click",function(){
  $('iframe',this)[0].src;
  $(this).addClass('open');
});