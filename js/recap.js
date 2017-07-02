var correctCaptcha = function(response) {
        if (response.length == 0){ // captcha unsolved
            alert("captcha failed")
        }else{ // captcha solved
            alert(response);
            $(input).fadeIn('normal');
        }
       
    };