function tinhTien() {
    let thucAnSelect = document.getElementById("thucAn");
    let nuocUongSelect = document.getElementById("nuocUong");
    let isBanDem = document.getElementById("banDem").checked;
    
    let tbody = document.getElementById("danhSachMon");
    let theHienThiTongTien = document.getElementById("tongTien");
    
    // Xóa kết quả cũ trước khi tính lại
    tbody.innerHTML = ""; 
    let tongTienCacMon = 0;

    // Duyệt qua danh sách Thức ăn đã chọn
    for (let i = 0; i < thucAnSelect.options.length; i++) {
        let option = thucAnSelect.options[i];
        if (option.selected) {
            let tenMon = option.text;
            let giaTien = Number(option.value);
            tongTienCacMon += giaTien;
            themDongTaiKetQua(tbody, tenMon, giaTien);
        }
    }

    // Duyệt qua danh sách Nước uống đã chọn
    for (let i = 0; i < nuocUongSelect.options.length; i++) {
        let option = nuocUongSelect.options[i];
        if (option.selected) {
            let tenMon = option.text;
            let giaTien = Number(option.value);
            tongTienCacMon += giaTien;
            themDongTaiKetQua(tbody, tenMon, giaTien);
        }
    }

    // Tính tổng tiền phải trả (tăng 10% nếu là ban đêm)
    let tongTienPhaiTra = tongTienCacMon;
    if (isBanDem) {
        tongTienPhaiTra = tongTienPhaiTra + (tongTienPhaiTra * 0.1);
    }

    // Hiển thị tổng tiền
    theHienThiTongTien.innerText = tongTienPhaiTra + " đồng";
}

// Hàm hỗ trợ chèn một dòng mới vào bảng kết quả
function themDongTaiKetQua(tbody, tenMon, giaTien) {
    let tr = document.createElement("tr");

    let tdTen = document.createElement("td");
    tdTen.innerText = tenMon;

    let tdGia = document.createElement("td");
    tdGia.innerText = giaTien;

    tr.appendChild(tdTen);
    tr.appendChild(tdGia);
    tbody.appendChild(tr);
}