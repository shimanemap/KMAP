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

  window.alert("①");

  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function()
  {
    window.alert("②ステータス：" + this.readyState + "◇" + this.status);

    if( this.readyState == 4 && this.status == 200 )
    {

        window.alert("③");

        if( this.response )
        {
            console.log(this.response);
            // 読み込んだ後処理したい内容をかく
            window.alert("きた" + this.response);
        }
    }
  }

  xmlHttpRequest.open( 'GET', 'http://mob.tpj.co.jp/mob/api/records/41', true );
  xmlHttpRequest.responseType = 'json';
  xmlHttpRequest.send( null );


 // document.write("<p>1" + data +"</p>");
}
