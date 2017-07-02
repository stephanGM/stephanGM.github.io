var correctCaptcha = function(response) {
    if (response.length == 0){ // captcha unsolved
        alert("captcha failed")
    }else{ // captcha solved
        $("input[type='submit']").fadeIn('normal'); 
        $(".g-recaptcha").fadeOut('normal');
    }      
};