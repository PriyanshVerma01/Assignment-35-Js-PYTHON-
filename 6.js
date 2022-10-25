function randomId(l)
{
    var text = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < l; i++ )
{  
    text += charList.charAt(Math.floor(Math.random() * charList.length));
}
    return text;
}
console.log(randomId(5));
