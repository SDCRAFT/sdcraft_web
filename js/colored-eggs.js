egg_audio=document.getElementById('egg-audio')
bg_audio=document.getElementById("bg-audio")
tap=0
function egg1(){
    mdui.alert("恭喜你发现一个彩蛋!","彩蛋:",empty(),{confirmText:'ohhhhhhhhh',modal:true,history:false,closeOnEsc:false});
    bg_audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=EZ9MdeTGiRBAqUbFwCFrBdIByxFijk_XF-PR2B8Mc1hjUw'
}
function egg2(){
    ++tap
    if (tap==10){
        mdui.alert("你点了十次了,这个是没有用的",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }if (tap==20){
        mdui.alert("草,你怎么还要点",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }if (tap==50){
        mdui.alert("真的没有东西",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }if (tap==70){
        mdui.alert("别点了,这会消耗你鼠标的耐久(1/10000)",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }if (tap==100){
        mdui.alert("算了,我不管你了",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }if (tap==120){
        mdui.alert("你的行为就很离谱,好吧!",".......",empty(),{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }if (tap==200){
        egg_audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=Ecb_de8KZjlHjGowkqkirzoBG3xsTqrx5qWhySJ7cdUeGw'
        mdui.alert("好吧，其实这是一个彩蛋(能点200次也是个人才)","彩蛋:",function(){egg_audio.play()},{confirmText:'确定',modal:true,history:false,closeOnEsc:false});
    }
}