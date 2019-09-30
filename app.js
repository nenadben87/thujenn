$('.carousel').carousel({
  interval:3000,
  keyboard: true,
  pause:'hover',
  wrap:true
});

$('#myCarousel').on('slide.bs.carousel', function(){
  console.log('slide');
});
$('#myCarousel').on('slid.bs.carousel', function(){
  console.log('slid');
});

$(function(){
    
  $(".video").click(function(){
      
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC +
      "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function(){
       $(theModal + ' iframe').attr('src', videoSRC);
      });
  });  
});


$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
   
});