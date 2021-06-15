$(document).ready(function(){
   // $(".sumsung__display_heading").click(function(){
   //
   //    $('.samsung__display__list_acc').show();
   //    $("#samsung__display__list").hide();
   // });


   var section = $('.vertical_accordion li');

   function toggleAccordion() {
      section.removeClass('active');
      $(this).addClass('active');
   }

   section.on('click', toggleAccordion);


   var brsec = $('.samsung__display__list li');
   function toggleAcc(){
      brsec.removeClass('active');
      $(this).addClass('active');
      var sec_id = $(this).data('sec');
      $("#"+sec_id).addClass('active');
          $('.samsung__display__list_acc').show();
          $("#samsung__display__list").hide();
   }

   brsec.on('click', toggleAcc);
});


