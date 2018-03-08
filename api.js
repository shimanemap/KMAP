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

  req.onreadystatechange = function() {
    var result = document.getElementById('result');
    if (req.readyState == 4) { // 通信の完了時
      if (req.status == 200) { // 通信の成功時
        result.innerHTML = req.responseText;
      }
    }else{
      result.innerHTML = "通信中...";
    }
  }


  document.write("<p>1" + result +"</p>");
}