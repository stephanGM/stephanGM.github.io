
$(function () {
    $('.work, .contact, .row.content').hide();
    $('.menu_home, .menu_work, .menu_contact, .index').bind('click', function () {
      $('.index, .work, .contact, .row.content').hide(); 
      $('.menu_home, .menu_work, .menu_contact').removeClass('active');
        
      if ($(this).attr("class") == 'menu_home')
      {
        $('.index').fadeIn('normal');
        $(this).addClass('active');
      }
      else if ($(this).attr("class") == 'menu_work')
      {
        $('.work').fadeIn('normal');
        $('.row.content').fadeIn('normal');
        $(this).addClass('active');
      }
      else if ($(this).attr("class") == 'menu_contact')
      { 
        $('.contact').fadeIn('normal');
        $('.row.content').fadeIn('normal');
        $(this).addClass('active');

      }
      else if ($(this).attr("class") == 'index')
      { 
        $('.work').fadeIn('normal');
        $('.row.content').fadeIn('normal');
        $('.menu_work').addClass('active');
      }
    });

});


   