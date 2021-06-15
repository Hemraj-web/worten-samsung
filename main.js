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


   var brsec = $('.samsung__lists li');
   function toggleAcc(){
      brsec.removeClass('active');
      $(this).addClass('active');
      var topsec_id = $(this).data('topsec');
      var br_all_section = $('section.br-section');
      br_all_section.removeClass('active');
      $("."+topsec_id).addClass('active');
   }

   brsec.on('click', toggleAcc);
   var samsung_display_list = $('.samsung__display__list li');
   function toggleSamsungDisplay(){
      samsung_display_list.removeClass('active');
      $(this).addClass('active');
      var sec_id = $(this).data('sec');
      $("#"+sec_id).addClass('active');
      $(this).parent().parent().find('.samsung__display__list_acc').show();
      $(this).parent().parent().find(".samsung__display__list").hide();
   }

   samsung_display_list.on('click', toggleSamsungDisplay);



});


