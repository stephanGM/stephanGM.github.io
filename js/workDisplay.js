
$(function () {
    $(".work_photo").hide();
    $('.work_tech').fadeIn('normal')
    $(".tech_click").addClass('active');
    $(".photo_click, .tech_click").bind("click", function () {
      $(".work_photo, .work_tech").hide();  
      $('.tech_click, .photo_click').removeClass('active');
      if ($(this).attr("class") == "photo_click")
      {
        $(".work_photo").fadeIn('normal');
        $(this).addClass('active');
      }
      else if ($(this).attr("class") == "tech_click")
      {
         $(".work_tech").fadeIn('normal');
         $(this).addClass('active');
      }
      else if ($(this).attr("class") == "design_click")
      { 
        $(".work_design").fadeIn('normal');
      }
    });

});