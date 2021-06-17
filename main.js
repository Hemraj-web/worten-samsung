$(document).ready(function () {
  // $(".sumsung__display_heading").click(function(){
  //
  //    $('.samsung__display__list_acc').show();
  //    $("#samsung__display__list").hide();
  // });


  /*************For vertical accordion*************/

  var section_newqled = $('.samsung__list__newled .vertical_accordion li');

  function toggleAccordion_newqled() {
    section_newqled.removeClass('active');
    $(this).addClass('active');
  }

  section_newqled.on('click', toggleAccordion_newqled);

  var section_qled = $('.samsung__list__qled .vertical_accordion li');

  function toggleAccordion_qled() {
    section_qled.removeClass('active');
    $(this).addClass('active');
  }

  section_qled.on('click', toggleAccordion_qled);

  var section_uhd = $('.samsung__list__uhd .vertical_accordion li');

  function toggleAccordion_uhd() {
    section_uhd.removeClass('active');
    $(this).addClass('active');
  }

  section_uhd.on('click', toggleAccordion_uhd);

  var section_lifestyle = $('.samsung__list__tvlifestyle .vertical_accordion li');

  function toggleAccordion_lifestyle() {
    section_lifestyle.removeClass('active');
    $(this).addClass('active');
  }

  section_lifestyle.on('click', toggleAccordion_lifestyle);


  var brsec = $('.samsung__lists li');

  function toggleAcc() {
    brsec.removeClass('active');
    $(this).addClass('active');
    var topsec_id = $(this).data('topsec');
    var br_all_section = $('section.br-section');
    br_all_section.removeClass('active');
    $("." + topsec_id).addClass('active');

    $("." + topsec_id).find('.samsung__display__list_acc').removeClass('active');
    $("." + topsec_id).find(".samsung__display__list").show();
  }

  brsec.on('click', toggleAcc);
  var brdisplay = false;
  var samsung_display_list = $('.samsung__display__list li');

  function toggleSamsungDisplay() {


    samsung_display_list.removeClass('active');
    $(this).addClass('active');
    var sec_id = $(this).data('sec');
    var acc_sec_id = $(this).data('accid');
    $("#" + acc_sec_id).slideToggle();
    $("#" + acc_sec_id).siblings('.accordion__title').addClass('active accordion-active');


    $("#" + sec_id).addClass('active');
    $("#" + sec_id).siblings('li').removeClass('active');
    $(this).parent().parent().find('.samsung__display__list_acc').addClass('active');
    $(".samsung__accordion").removeClass('active');
    $("#" + acc_sec_id).parent().parent().parent().find('.samsung__accordion').addClass('active');
    $(this).parent().parent().find(".samsung__display__list").hide();
  }


  samsung_display_list.on('click', toggleSamsungDisplay);


  $(function () {

    //BEGIN
    $(".accordion__title").on("click", function (e) {

      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
      }

      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
    });
    //END





  });

});


