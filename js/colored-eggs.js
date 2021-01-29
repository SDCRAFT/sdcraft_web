egg_audio=document.getElementById('egg-audio')
bg_audio=document.getElementById("bg-audio")
tap=0
function egg1(){
    mdui.alert("恭喜你发现一个菜单!","彩蛋:",empty(),{confirmText:'ohhhhhhhhh',modal:true,history:false,closeOnEsc:false});
    bg_audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=EZ9MdeTGiRBAqUbFwCFrBdIByxFijk_XF-PR2B8Mc1hjUw'
}
function egg2(){
    ++tap
    console.log(tap)
    if (tap==10){
        mdui.alert("你点了十次了,这个是没有用的",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }
    if (tap==50){
        mdui.alert("草，你怎么还要点",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }
    if (tap==100){
        egg_audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?Ecb_de8KZjlHjGowkqkirzoBG3xsTqrx5qWhySJ7cdUeGw'
        mdui.alert("好吧，其实这是一个彩蛋","彩蛋:",function(){egg_audio.play()},{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }
}