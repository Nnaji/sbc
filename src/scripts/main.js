(function($){
  "use strict";
   // Dropdow Menu Sections
   var dropDownMenu = $('.dropdown-menu', this);
   $('ul.nav li.dropdown')
   .mouseenter(function(){
     dropDownMenu.slideDown('fast');

   }) .mouseleave(function(){
      dropDownMenu.slideUp('fast');
  });
  // Nav Tab Section 
  $('.nav-tabs a:first').tab('show', 'slow');
      
    
      // Current activ
$("a:contains('HOME')").parent().addClass('active');
$("a:contains('About')").parent().addClass('active');
 
    })(jQuery);