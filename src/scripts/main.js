(function($){
  "use strict";
   // Dropdow Menu Sections
//    var dropDownMenu = $('.dropdown-menu', this).hide();
//     $('ul.nav li.dropdown').hover(function(){
//     dropDownMenu.show(); },
//      function(){
//         dropDownMenu.hide();
//        });
   /* .mouseenter(function(){
     dropDownMenu.show('fast');

   }) .mouseleave(function(){
      dropDownMenu.hide('slow');
  }); */


// Instafeed Section

/* var feed = new Instafeed({
    get: 'user',
    userId: '4079838939',
    // clientId: '4079838939.1677ed0.d3102a641cd6437e8d443a17d5d8aeb9',
    accessToken: '4079838939.1677ed0.d3102a641cd6437e8d443a17d5d8aeb9',
    limit: 50,
    sortBy: 'most-recent', //'most-liked',
    after: function () {
      var images = $("#instafeed").find('a');
      $.each(images, function(index, image) {
        var delay = (index * 75) + 'ms';
        $(image).css('-webkit-animation-delay', delay);
        $(image).css('-moz-animation-delay', delay);
        $(image).css('-ms-animation-delay', delay);
        $(image).css('-o-animation-delay', delay);
        $(image).css('animation-delay', delay);
        $(image).addClass('animated flipInX');
      });
    },
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
  });
  feed.run();

 */

  // Nav Tab Section 
  $('.nav-tabs a:first').tab('show', 'slow');


// Carousel
 $('.glyphicon-chevron-right, .glyphicon-chevron-left').css({
    'color': '#FFAD33',
 });

    })(jQuery);