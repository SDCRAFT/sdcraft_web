    function load_music(){
      var htmlobj= $.ajax({url:"music-url.txt",async:false})
      var dataString = htmlobj.responseText
      console.log(dataString)
      url=dataString.split(";")
      console.log(url)
      audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share='+url[1]
    }
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
    function changeVolume(){
        var display=document.getElementById('volume-display');
        var Volume=document.getElementById('volume').value;
        audio.volume=Volume;
        display.innerHTML = Math.round(Volume * 100)+"%";
    }