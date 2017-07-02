function get_action(form) 
{
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        alert("false");
        return false;
    }
    else
    {
        alert("false");
        return true; 
    }
}