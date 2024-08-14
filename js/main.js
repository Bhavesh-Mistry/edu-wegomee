/*sticky header*/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 10) {
        $(".navbar.fixed-top").addClass("darkHeader");
        $(".college-info").addClass("pt-90");
        $(".college-info").removeClass("mt-120");
        // $(".subpages-bg").addClass("pt-170");
    } 
    else {
        $(".navbar.fixed-top").removeClass("darkHeader");
        $(".college-info").removeClass("pt-90");
        $(".college-info").addClass("mt-120");
        // $(".subpages-bg").removeClass("pt-170");
    }
}); 

$('.carousel').carousel({
 interval: 6000
})

/*advisors*/
$('.advisors-list-box').owlCarousel({
  loop:false,
  margin:30,
  dots: true,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:2
      },
      1199:{
          items:3
      }
  }
});

$('.plan-box .owl-carousel').owlCarousel({
  loop:false,
  margin:0,
  items:1,
  dots: true
});


/* image upload */
// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function(e) {
//           $('#imagePreview').css('background-image', 'url('+e.target.result +')');
//           $('#imagePreview').hide();
//           $('#imagePreview').fadeIn(650);
//       }
//       reader.readAsDataURL(input.files[0]);
//   }
// }
// $("#imageUpload").change(function() {
//     readURL(this);
// });


/* video */

if (window.webshim) {
    (function () {
        webshim.setOptions('mediaelement', {
            replaceUI: 'auto'
        });
        webshim.setOptions({types: 'range'});
        webshim.setOptions('extendNative', true);
        webshim.polyfill('mediaelement forms forms-ext');
    })();
}


/*video*/

$('.video-box').click(function () {
  if($(this).children(".video-fluid").get(0).paused){
    $(this).children(".video-fluid").get(0).play();
    $(this).children(".playpause").fadeOut();
    $(this).addClass("video-box-before");
  }else{
    $(this).children(".video-fluid").get(0).pause();
    $(this).children(".playpause").fadeIn();
    $(this).removeClass("video-box-before");
  }
});


/*select-bx*/
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});

$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});

$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});

$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


/*delete icon see on checkbox active*/

$('.ch-bx input:checkbox').change(function(){
  if($(this).is(":checked")) {
      $('.icon-delete').addClass('active');
  } else {
      $('.icon-delete').removeClass('active');
  }
});