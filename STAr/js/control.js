// Basic control instruction for ARS


// Sail control
function DOWN() {
    var timestamp1 = new Date().getTime();
    var xmlhttp;  // 新建一个 XMLHttpRequest 对象用于 AJAX
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail").innerHTML = xmlhttp.responseText;
            var result = xmlhttp.responseText;
            //console.log(result);
            var timestamp2 = new Date().getTime();
            var dis = timestamp2 - timestamp1;
            document.getElementById("test").innerHTML = dis;
            console.log(dis);
        }
    }
    xmlhttp.open("GET", "06_queryInsertDown.php", true);  // 向服务器发送请求
    xmlhttp.send();
}

function UP() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_queryInsert.php", true);
    xmlhttp.send();
}

function SAILRESET() {
    // Reset the sail angle to 0
    var xmlhttp; // XMLHttpRequest Object
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_querySailReset.php", true);
    xmlhttp.send();
}

function SAILSETMAX(){
    // Set the sail angle to its maximum
    var xmlhttp; // XMLHttpRequest Object
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("sail").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_querySailSetMax.php", true);
    xmlhttp.send();
}

// Rudder control
function LEFT() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("rudder").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_queryInsertRudderLeft.php", true);
    xmlhttp.send();
}

function RIGHT() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("rudder").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "06_queryInsertRudderRight.php", true);
    xmlhttp.send();
}

function RUDDERRESET(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRudderReset.php", true);
    xmlhttp.send();
}

function RUDDERRESET(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRudderSetTo45.php", true);
    xmlhttp.send();
}

function WINDE(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay11.php", true);
    xmlhttp.send();
}

function WINDW(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay12.php", true);
    xmlhttp.send();
}

function LED(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay13.php", true);
    xmlhttp.send();
}

function REMAINED(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay14.php", true);
    xmlhttp.send();
}

function WINDEC(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay110.php", true);
    xmlhttp.send();
}

function WINDWC(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay120.php", true);
    xmlhttp.send();
}

function LEDC(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay130.php", true);
    xmlhttp.send();
}

function REMAINEDC(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("relay1").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRelay140.php", true);
    xmlhttp.send();
}

function RU(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("sail").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRightUp.php", true);
    xmlhttp.send();
}

function RD(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("sail").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryRightDown.php", true);
    xmlhttp.send();
}
function LU(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryLeftUp.php", true);
    xmlhttp.send();
}
function LD(){
    // Reset the rudder angle to 0
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("rudder").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", "06_queryLeftDown.php", true);
    xmlhttp.send();
}


// Support keyboard control
// I don't know why it does not work
function KBCONTROL(){
	window.onload = function () {
      var current = 0;
      document.getElementById('mid').onclick = function () {
        current = (current + 15) % 360;
        this.style.transform = 'rotate(' + current + 'deg)';
      }
    }

    var mid = document.getElementById("mid");
    //给mid设置事件的监听
    window.document.onkeydown = function (ent) {
      var event = ent || window.event;
      switch (event.keyCode) {
        // 监听键盘操作
        case 87:  // Press KeyW
          UP();
          break;
        case 83:  // Press KeyS
          DOWN();
          break;
        case 65:  // Press KeyA
          LEFT();
          break;
        case 68:  // Press KeyD
          RIGHT();
          break;
        case 37:  // Press ArrowLeft
          mid.style.left = Math.max(0, mid.offsetLeft - 5) + "px";
          var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";
          //  $( "span:first" ).text( "( position.pageX, position.pageY ) : " + pageCoords+ ","+clientCoords);
          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        case 38:  // Press ArrowUp
          mid.style.top = Math.max(0, mid.offsetTop - 5) + "px";
          var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";
          //  $( "span:first" ).text( "( position.pageX, position.pageY ) : " + pageCoords+ ","+clientCoords);
          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        case 39:  // Press ArrowRight
          mid.style.left = Math.min(375, mid.offsetLeft + 5) + "px";
          var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";
          //  $( "span:first" ).text( "( position.pageX, position.pageY ) : " + pageCoords+ ","+clientCoords);
          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        case 40:  // Press ArrowDown
          mid.style.top = Math.min(575, mid.offsetTop + 5) + "px";
          //var pageCoords = "( " + mid.style.top + ", " + mid.style.down + " )";
          //var clientCoords = "( " + mid.style.left + ", " + mid.style.top + " )";

          $("span:last").text("( postion.clientX, position.clientY ) : " + clientCoords);
          break;
        // default:
        // need some prompt message here
      }
    }
}