//  chẵn / lẻ
function kiemTraChanLe(n) {
    return n % 2 === 0 ? "Chẵn" : "Lẻ";
}

//  số nguyên tố
function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Hàm chính
function xuLy() {
    let n = Number(document.getElementById("inputN").value);

    // Chẵn / lẻ
    document.getElementById("kq1").innerText =
        "Số " + n + " là: " + kiemTraChanLe(n);

    // Nguyên tố
    document.getElementById("kq2").innerText =
        "Có phải số nguyên tố: " + laSoNguyenTo(n);

    // Danh sách số nguyên tố
    let ds = "";
    for (let i = 1; i <= n; i++) {
        if (laSoNguyenTo(i)) {
            ds += i + " ";
        }
    }
    document.getElementById("kq3").innerText =
        "Số nguyên tố từ 1 đến n: " + ds;

    // Tổng chia hết cho 3 hoặc 5
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            tong += i;
        }
    }
    document.getElementById("kq4").innerText =
        "Tổng chia hết cho 3 hoặc 5: " + tong;
}