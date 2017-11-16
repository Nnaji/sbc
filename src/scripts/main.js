(function($){
  "use strict";
   // Dropdow Menu Sections
   var dropDownMenu = $('.dropdown-menu', this).hide();
   $('ul.nav li.dropdown').hover(function(){
    dropDownMenu.show('fast'); },
    function(){
        dropDownMenu.hide('fast');
   
      });
   /* .mouseenter(function(){
     dropDownMenu.show('fast');

   }) .mouseleave(function(){
      dropDownMenu.hide('slow');
  }); */
  // Nav Tab Section 
  $('.nav-tabs a:first').tab('show', 'slow');
      
    
      // Current activ
/* $("a:contains('HOME')").parent().addClass('active');
$("a:contains('About')").parent().addClass('active'); */
 
    })(jQuery);