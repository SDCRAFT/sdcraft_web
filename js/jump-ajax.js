var page_id=document.getElementById('page');
function get_page(url){
    var page_obj=$.ajax({url:"/page"+url+"?"+new Date().getTime(),async:false});
    return page_obj.responseText;
}
function index(){
    setCookie("page","index.html",30);
    var data=get_page("/index.html");
    page_id.innerHTML=data;
}
function team(){
    setCookie("page","team.html",30);
    var data=get_page("/team.html");
    page_id.innerHTML=data;
}
function introVideo(){
    setCookie("page","introVideo.html",30);
    var data=get_page("/introVideo.html");
    page_id.innerHTML=data;
}