function CheckPassword(inputtext)
{
    var password=/^[A-Za-z]\w{7,14}$/;
    if(inputtext.value.match(password)){
        alert("corretc, try another way")
        return true;

    }
    else{
        alert("wrong......!")
        return false;
    }
}
function cpassword(inputtext)
{
    if(password==cpassword){
        alert("correct")
    }
    else
    {
        alert("incoreect")
    }
}