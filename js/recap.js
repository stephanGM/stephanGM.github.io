var correctCaptcha = function(response) {
    if (response.length == 0){ // captcha unsolved
        alert("captcha failed")
    }else{ // captcha solved
        $(".g-recaptcha").hide('normal');
        $('#placeholder').replaceWith('<input type="submit" value="Send" />');
        // $("input[type='submit']").fadeIn(); 
    }      
};