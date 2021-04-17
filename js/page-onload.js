function page_load() {
    var page = getCookie("page");
    if (page != "") {
        var url = "/" + page;
    } else {
        setCookie("page", "index.html", 30);
        page_id.innerHTML = get_page("/index.html");
        return;
    }
    page_id.innerHTML = get_page(url);
    music();
    get_music()
}