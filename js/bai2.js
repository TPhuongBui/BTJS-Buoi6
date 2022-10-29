function tinhTongHaiSo() {
    var n = Number(document.querySelector("#nhapSoN").value);
    var x = Number(document.querySelector("#nhapSoX").value);
    console.log(n,x);
    var tong = 0;
    for(i = 1; i <= n ; i++){
        tong += Math.pow(x,i);
        console.log(tong);

    }

    document.querySelector("#txtNotify").innerHTML = tong;
}

document.querySelector("#btnTinhTong").onclick = tinhTongHaiSo;
