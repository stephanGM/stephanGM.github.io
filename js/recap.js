var correctCaptcha = function(response) {
    if (response.length == 0){ // captcha unsolved
        alert("captcha failed")
    }else{ // captcha solved
        $(".g-recaptcha").hide('normal');
        $("input[type='submit']").fadeIn(); 
    }      
};