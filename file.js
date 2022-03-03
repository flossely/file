function playAudio(obj, name) {
    obj.src = name;
    obj.play();
}
function pauseAudio(obj) {
    obj.pause();
}
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
