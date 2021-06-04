function text_start(text_name) {
    var text = document.getElementById(text_name).getAttribute("data-text");//获取要输出的文字
    var index = 0;
    var element = document.getElementById(text_name);//获取元素
    if (index < text.length) {
        element.innerText = element.innerText + text.charAt(index);
        index++;
    } else {
        clearInterval(c);//输出完后关闭定时器
    }
    var c = setInterval(myprint, 100);//定时器
}