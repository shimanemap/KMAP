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
  document.write("<p>Copyright (C) 2009 xxx. All Rights Reserved.</p>");
}
