$(document).ready(function () {

  /*************For vertical accordion of desktop*************/

  var section_newqled = $('.samsung__list__newled .vertical_accordion li');

  function toggleAccordion_newqled() {
    if ($(this).hasClass("active")) {
      $('#neoqled__id').click();
    }
    section_newqled.removeClass('active');
    $(this).addClass('active');

  }

  section_newqled.on('click', toggleAccordion_newqled);

  var section_qled = $('.samsung__list__qled .vertical_accordion li');

  function toggleAccordion_qled() {
    if ($(this).hasClass("active")) {
      $('#qled__id').click();
    }
    section_qled.removeClass('active');
    $(this).addClass('active');
  }

  section_qled.on('click', toggleAccordion_qled);

  var section_uhd = $('.samsung__list__uhd .vertical_accordion li');

  function toggleAccordion_uhd() {
    if ($(this).hasClass("active")) {
      $('#uhd__id').click();
    }
    section_uhd.removeClass('active');
    $(this).addClass('active');
  }

  section_uhd.on('click', toggleAccordion_uhd);


  var section_lifestyle = $('.samsung__list__tvlifestyle .vertical_accordion li');

  function toggleAccordion_lifestyle() {
    if ($(this).hasClass("active")) {
      $('#lifestyle__id').click();
    }
    section_lifestyle.removeClass('active');
    $(this).addClass('active');
  }

  section_lifestyle.on('click', toggleAccordion_lifestyle);
  /*************End For vertical accordion of desktop*************/


  /*************On click of small thumbnails of samsung list*************/
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
    $("." + topsec_id).find(".samsung__accordion").removeClass("active");
  }

  brsec.on('click', toggleAcc);
  /*************End On click of small thumbnails of samsung list*************/



  /************* On click for Mobile to open accordion list *************/
  var brdisplay = false;
  var samsung_display_list = $('.samsung__display__list li .sumsung__display_heading');

  function toggleSamsungDisplay() {
    var $this = $(this).parent();
    samsung_display_list.removeClass('active');
    $this.addClass('active');
    var sec_id = $this.data('sec');
    var acc_sec_id = $this.data('accid');
    $("#" + acc_sec_id).parent().parent().parent().find('.samsung__accordion').removeClass('active');
    $("#" + acc_sec_id).parent().parent().parent().find('.accordion__title').removeClass('active accordion-active');
    $("#" + acc_sec_id).parent().parent().parent().find('.accordion__content').hide();
    if (!$("#" + acc_sec_id).siblings('.accordion__title').hasClass("accordion-active")) {
      $("#" + acc_sec_id).slideToggle();
      $("#" + acc_sec_id).siblings('.accordion__title').addClass('active accordion-active');
    }

    $("#" + sec_id).addClass('active');
    $("#" + sec_id).siblings('li').removeClass('active');
    $this.parent().parent().find('.samsung__display__list_acc').addClass('active');
    var samsung_accordion = $(".samsung__accordion");
    samsung_accordion.removeClass('active');
    $("#" + acc_sec_id).parent().parent().parent().find('.samsung__accordion').addClass('active');
    $this.parent().parent().find(".samsung__display__list").hide();
  }
  samsung_display_list.on('click', toggleSamsungDisplay);
  /************* End click for Mobile to open accordion list *************/

  $(function () {

    /************* Accordion of Mobile *************/
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
    /************* End Accordion of Mobile *************/


  });

});


