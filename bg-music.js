    function bf(){
    var button = document.getElementById('music-button');
     if(audio.paused){                 
         audio.play();
         button.innerHTML = "pause";
     }else{
      audio.pause();
      button.innerHTML = "play_arrow";
     }
   }
   function reloadPage(){
     window.location.reload()
   }
   var url=["EZ_4lwkp0clJkry6l00qi9UBXgS0SJbZ1cA-rRbxTcF5bw","EQHDBwHXT3tIjYq55OIOSXoBdx11c4LkRQUBKuelhZR_3A","EUD-bCI4s0ZDrC_x8Bzlg20BEvQAl7dh9s9vhnfrITG4Cw","EWXKwIMO67VIlrzUNG9VBOsBT6lRakfiz8HGFbd3Kjyjxw","EW0Cbj0Vh8hLjJ5-Mz6sbv4BzCYdTEy1StgBglAgIkAnrw"]
   var num=1;
   var len=4
   function prev(){
       if(num>1){
           num = num - 1;
         }
       else{
           num=4;
         }
       audio.src = 'https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=' + url[num];
       audio.play();
   }
   // 下一首
   function next(){
       if(num<4){
           num = num + 1;
         }
       else{
           num=1;
       }
     audio.src = 'https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=' + url[num];
       audio.play();
   }
   audio.addEventListener('ended',function(){
     next.onclick();
   },false);
   // 上一首