function music() {
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 1,
    audio: []
  });
  get_music(ap);
}
function get_music(ap) {
  var id = $.ajax({ url: "/assets/music-url.txt", async: false }).responseText;
  id = id.split(";");
  for (i = 0; i <= id.length - 1; i++) {
    var info = music_info(id[i]);
    ap.list.add([{
      name: info[0],
      artist: info[2],
      url: "http://music.163.com/song/media/outer/url?id=" + id[i],
      cover: info[1],
      lrc: info[3]
    }]);
  }
}
function music_info(id) {
  var htmlobj = $.ajax({ url: "https://cros.heartalborada.workers.dev/http://music.163.com/api/search/pc?s=" + id + "&type=1", async: false,dataType:"jsonp",});
  var data = htmlobj.responseText;
  data = data.replace(/\"/g, '').replace(/:/g, '')
  var info = data.split(",");
  var lrc=$.ajax({url:'https://cros.heartalborada.workers.dev/http://music.163.com/api/song/media?id=' + id,async:false}).responseText
  lrc=lrc.replace(/\\n/g,"\n")
  var out = [info[0].replace("{result{songs[{name", ""), info[25].replace("blurPicUrl", "").replace("http", "http:"), info[9].replace("artists[{name", ""),lrc]
  return out;
}
function empty() { }