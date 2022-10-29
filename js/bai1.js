function timSoNhoNhat() {
    var tong = 1;
    var n = 1;
    while (tong <= 10000 ) {
        // console.log("n:"+n +" - " +"tong:" + tong)
        n += 1;
        tong += n;
    }

    document.querySelector("#txtIn").innerHTML = "Số nguyên dương nhỏ nhất là: " + n ;
}

document.querySelector("#btnIn").onclick = timSoNhoNhat;

