$(document).ready(function(){
   $(".sumsung__display_heading").click(function(){
      $("#asdf").hide();
      $('.something').show();
      $('html,body').animate({ scrollTop: 9999 }, 'slow');
   });


   var section = $('.vertical_accordion li');

   function toggleAccordion() {
      section.removeClass('active');
      $(this).addClass('active');
   }

   section.on('click', toggleAccordion);


   var brsec = $('.samsung__lists li');
   function toggleAcc(){
      brsec.removeClass('active');
      $(this).addClass('active');

   }

   brsec.on('click', toggleAcc);
});


