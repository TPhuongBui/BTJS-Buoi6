function tinhGiaiThua() {
    var number = Number(document.querySelector("#nhapSoN2").value);
    var giaiThua = 1;
    var count = 1;
    // console.log(number);

    while (count <= number) {
        giaiThua = giaiThua * count;
        count++;
    
    }
    // console.log(giaiThua);
    document.querySelector("#txtGiaiThua").innerHTML = giaiThua;
}

document.querySelector("#btnTinhGiaiThua").onclick = tinhGiaiThua;