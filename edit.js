function save() {
    var name = filename.value;
    var content = encodeURIComponent(document.getElementById('content').value);
    var dataString = 'name=' + name + '&content=' + content;
    $.ajax({
        type: "POST",
        url: "write.php",
        data: dataString,
        cache: false,
        success: function(html) {
            document.location.reload();
        }
    });
    return false;
}
function del(name) {
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            document.location.reload();
        }
    }
    xmlhttp.open("GET","delete.php?name="+name,false);
    xmlhttp.send();
}
function mkdir(name) {
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            document.location.reload();
        }
    }
    xmlhttp.open("GET","mkdir.php?name="+name,false);
    xmlhttp.send();
}
function move(name, to) {
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            document.location.reload();
        }
    }
    xmlhttp.open("GET","move.php?name="+name+"&to="+to,false);
    xmlhttp.send();
}
function copy(name, to) {
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            document.location.reload();
        }
    }
    xmlhttp.open("GET","copy.php?name="+name+"&to="+to,false);
    xmlhttp.send();
}
function replaceText(stri) {
    var str = document.getElementById('content').value;
    var stro = document.getElementById('replacebox').value;
    var strp = str.toString().replace(stri, stro);
    document.getElementById('content').value = strp;
}
function countText() {
    var sourceText = document.getElementById('content').value;
    var charsCount = sourceText.length;
    document.getElementById('statusBar').innerHTML = 'CHARS = ' + charsCount;
}