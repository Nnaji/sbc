(function($){
  "use strict";
   // Dropdow Menu Sections
   $('ul.nav li.dropdown')
   .mouseenter(function(){
     $('.dropdown-menu', this).slideDown('slow');

   }) .mouseleave(function(){
      $('.dropdown-menu', this).slideUp('slow');
  });
  // Nav Tab Section 
  $('.nav-tabs a:first').tab('show', 'slow');
      
    
      // Current activ
$("a:contains('HOME')").parent().addClass('active');
$("a:contains('About')").parent().addClass('active');
 
    })(jQuery);