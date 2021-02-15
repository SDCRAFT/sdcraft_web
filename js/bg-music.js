    audio=document.getElementById("bg-audio")
    //从文件中加载音乐
    function load_music(){
      mdui.alert("音乐设置:左下角加号和右上角音乐图标","Tips:",empty(),{confirmText:'我知道了',modal:true,history:false,closeOnEsc:false});
      //ajax载入文件-开始
      var htmlobj= $.ajax({url:"assets/music-url.txt",async:false});
      var dataString = htmlobj.responseText;
      //ajax载入文件-结束
      url=dataString.split(";");//分割文本
      frequency=get_array(url)-1;//转换变量类型
      random = Math.floor(Math.random() * (frequency - 0) ) + Number(0);//随机数
      num=random;//赋值
      audio.src='https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share='+url[random];//伪随机音乐
      audio.pause()
    }
    //音乐进度显示
    //进度条
    setInterval("music_speed_display();music_speed_f();",1);//重复执行
    function music_speed_display(){
      var all_time=document.getElementById('all_time')//总时长
      var play_time=document.getElementById('play_time')//已播放时长
      var progress_bar=document.getElementById('speed')//进度条
      var text=document.getElementById('text_play')//文字显示
      duration=Math.round(audio.duration)//四舍五入总时长(整数)
      var currentTime=Math.round(audio.currentTime)//四舍五入已播放时长(整数)
      percentage=currentTime / duration * 100//转换为百分比
      all_time.innerHTML = "总时长:"+duration+"s";//输出到HTML
      play_time.innerHTML = "播放时长:"+currentTime+"s"//输出到HTML
      text.innerHTML="百分比进度:"+percentage.toFixed(3)+"%"//四舍五入百分比进度(保留到千分位)
      progress_bar.style="width:"+percentage+"%"//进度条显示
      mdui.updateSpinners()//刷新进度条
    }
    //滑块
    function music_speed_f(){
      var progress_change=document.getElementById('change')//滑块
      progress_change.value=percentage.toFixed(3)//四舍五入百分比进度(保留到千分位)
      mdui.updateSliders()//刷新进度条
    }
    //音乐进度调整+判断音乐是否加载
    function music_speed_change(){
      clearInterval(music_speed_f);//结束重复执行(不然会一直弹回到播放的位置)
      var progress_change=document.getElementById("change")//滑块
      var tag=document.getElementById('all_time')
      //判断音乐是否加载成功
      if (tag.innerText=="总时长:NaNs"){//否
        alert("音乐还未加载完毕哦,请再等等吧!");//在页面上方弹出警告窗
      }
      //是
      else{
        var value=progress_change.value//获取滑块值
        time=Math.round(value * duration / 100)//计算拖动到的位置,四舍五入(整数)
        audio.currentTime=time//变更播放进度
      }
    }
    //转换变量类型?
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
          return Object.getOwnPropertyNames(value).length;//返回值
      }
      return false;//返回值
    }
    //暂停播放
    function bf(){
      //判断音乐是否播放
      if(audio.paused){//是
        audio.play();//播放音乐
      }else{//否
        audio.pause();//暂停音乐
      }
    }
    //更改按钮图标
    function button_icon_change(id,icon){
      var Element=document.getElementById(id)
      Element.innerHTML = icon
    }
    //页面重载
    function reloadPage(){
      window.location.reload()//重载
    }
    //背景音乐循环
    function prev(){// 下一首
      //'num'是否大于1
      if(num>0){//是
        num = num - 1;//减1
      }
      else{//否
        num=frequency;//变为'frequency'(最大值)
      }
      audio.src = 'https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=' + url[num];//更改音乐url
      audio.play();//播放音乐
    }
    function next(){// 上一首
      //'num'是否小于'frequency'
      if(num<frequency){//是
        num = num + 1;//加1
      }
      else{//否
        num=0;//变为0(最小值)
      }
      audio.src = 'https://heartalborada-my.sharepoint.com/personal/admin_heartalborada_onmicrosoft_com/_layouts/52/download.aspx?share=' + url[num];//更改音乐url
      audio.play();//播放音乐
      }
   //音量调整
    function changeVolume(){
      var display=document.getElementById('volume-display');//音量显示
      var Volume=document.getElementById('volume').value;//获取滑块值
      audio.volume=Volume;//调整音量
      display.innerHTML = "当前音量:"+Math.round(Volume * 100)+"%";//变更显示内容
    }
    //空函数
    function empty(){}
    //ID3解析
    function ID3(url){
      var file=$.ajax({
        url:"https://cors.netnr.workers.dev/"+url
      })
      ID3.loadTags(file, function() {
        var tags = ID3.getAllTags(file);
        alert(tags.comment + " - " + tags.track + ", " + tags.lyrics);
    });
    }