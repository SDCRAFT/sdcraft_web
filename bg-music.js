    //从文件中加载音乐
    function load_music(){
      var htmlobj= $.ajax({url:"/music-url.txt",async:false});
      var dataString = htmlobj.responseText;
      url=dataString.split(";");
      frequency=get_array(url);
      random = Math.floor(Math.random() * (frequency - 1) ) + Number(1);
      num=random;
      audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share='+url[random];//伪随机音乐
      audio.play();
    }
    //音乐进度显示
    setInterval("music_speed_display();music_speed_f();",1);
    function music_speed_display(){
      var all_time=document.getElementById('all_time')
      var play_time=document.getElementById('play_time')
      var progress_bar=document.getElementById('speed')
      var text=document.getElementById('text_play')
      duration=Math.round(audio.duration)
      var currentTime=Math.round(audio.currentTime)
      percentage=currentTime / duration * 100
      all_time.innerHTML = "总时长:"+duration+"s";
      play_time.innerHTML = "播放时长:"+currentTime+"s"
      text.innerHTML="百分比进度:"+percentage.toFixed(3)+"%"
      progress_bar.style="width:"+percentage+"%"
      mdui.updateSpinners()
    }
    function music_speed_f(){
      var progress_change=document.getElementById('change')
      progress_change.value=percentage.toFixed(3)
      mdui.updateSliders()
    }
    //音乐进度调整
    function music_speed_change(){
      clearInterval(music_speed_f);
      var progress_change=document.getElementById("change")
      if (duration=="NaN"){
        alert("音乐还未加载完毕哦,请再等等吧!");
      }
      else{
        var value=progress_change.value
        time=Math.round(value * duration / 100)
        audio.currentTime=time
      }
    }
    //我也忘了这是什么了
    function get_array(value){
      var type = typeof value;
      if(type == 'string'){
         return value.length;
      }else if(type == 'object'){
        var type = value instanceof Array;
          if(type){
            return value.filter(function(ele){
              return !!ele || ele == 0;
            }).length;
          }
          return Object.getOwnPropertyNames(value).length;
      }
      return false;
    }
    //暂停播放
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
   //页面重载
    function reloadPage(){
      window.location.reload()
    }
    //背景音乐循环
    // 下一首
    function prev(){
      if(num>1){
        num = num - 1;
      }
      else{
        num=frequency;
      }
      audio.src = 'https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=' + url[num];
      next()
    }
    // 上一首
    function next(){
      if(num<frequency){
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
   //音量调整
    function changeVolume(){
      var display=document.getElementById('volume-display');
      var Volume=document.getElementById('volume').value;
      audio.volume=Volume;
      display.innerHTML = "当前音量:"+Math.round(Volume * 100)+"%";
    }