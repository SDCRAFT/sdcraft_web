function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
function checkCookie_DSMI(){
    var DSMI=getCookie("DSMI");
    if (DSMI!="")
    {
        if (DSMI=="false") {
            mdui.alert("音乐设置:左下角加号和右上角音乐图标\n可在音乐设置内关掉此提示","Tips:",empty(),{confirmText:'我知道了',modal:true,history:false,closeOnEsc:true});
        } else {
            var btn=document.getElementById('DSMI_Btn');
            btn.setAttribute("checked","")
        }
    } else {
        setCookie("DSMI","false",30);
        checkCookie_DSMI();
    }
}
function checkCookie_page(){
    var page=getCookie("page");
    if (page!="")
    {
        return page;
    } else {
        setCookie("page","index.html",30);
        checkCookie_page();
    }
}