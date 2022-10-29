function inTheDiv() {
    var content = "";
    var count = 1;
    while (count <= 10) {
        if (count % 2 == 0) {
            content += "<div class='alert alert-danger'>Chẵn</div>";
        } else {
            content += "<div class='alert alert-primary'>Lẻ</div>";
        }
        count++;
    }
    document.querySelector("#txtInDiv").innerHTML = content;
}

document.querySelector("#btnInTheDiv").onclick = inTheDiv;