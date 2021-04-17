function page_load(){
    checkCookie_DSMI();
    var url="/"+checkCookie_page();
    page_id.innerHTML=get_page(url);
    load_music()
}