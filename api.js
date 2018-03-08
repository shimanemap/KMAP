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

  xmlHttpRequest.open( 'GET', 'https://www.geospatial.jp/ckan/dataset/db74071f-cd0a-406d-ba3d-57c7a25d9925/resource/f4536684-5a8e-4880-9b8d-da8a26ee073b/download/32shimane.geojson', true );
  xmlHttpRequest.responseType = 'json';
  xmlHttpRequest.send( null );


 // document.write("<p>1" + data +"</p>");
}
