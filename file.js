function playMIDI(id) {
    MIDIjs.play(id);
}
function pauseMIDI(id) {
    MIDIjs.pause(id);
}
function levelUp(dir) {
    if (dir.toString('').includes('/')) {
        var split = dir.toString('').split('/');
        var count = split.length;
        var last = count - 1;
        var link = dir.toString('').replace('/' + split[last], '');
    } else {
        var link = dir;
    }
    window.location.href = '?dir=' + link;
}
function fileSearch() {
    var dir = search.name;
    var q = search.value;
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            window.location.href = "?dir="+dir+"&q="+q;
        }
    }
    xmlhttp.open("GET","?dir="+dir+"&q="+q,false);
    xmlhttp.send();
}
function write(name, content) {
    var dataString = 'name=' + name + '&content=' + content;
    $.ajax({
        type: "POST",
        url: "write.php",
        data: dataString,
        cache: false,
        success: function(html) {
            window.location.reload();
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
function moveBulk(name, to) {
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {}
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
function upload(dir, file) {
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
    xmlhttp.open("POST","upload.php?dir="+dir+"&file="+file,false);
    xmlhttp.send();
}
