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
