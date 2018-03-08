function dispMsg(str){
  document.write("<p>");
  document.write(str);
  document.write("</p>");
}

dispMsg("Hello");
document.write("<p>Good morning</p>");
dispMsg("bye");

dispCopyright();

function dispCopyright(){
  var req = new XMLHttpRequest();

  window.alert("①");

  req.onreadystatechange = function() {
    window.alert("②");

    var result = document.getElementById('result');
    window.alert("③レディーステート：" + req.readyState);
    if (req.readyState == 4) { // 通信の完了時
      window.alert("④ステータス：" + req.status);
      if (req.status == 200) { // 通信の成功時
        result.innerHTML = req.responseText;
        window.alert("⑤");
      }
    }else{
      result.innerHTML = "通信中...";
      window.alert("⑥");
    }
  }

  window.alert("⑦");

  req.open("GET", "http://mob.tpj.co.jp/mob/api/records/41", true);
  req.send(null);

  window.alert("⑧");

  var data = eval('(' + req.responseText + ')');;

  window.alert("おわり");

  document.write("<p>1" + data +"</p>");
}
