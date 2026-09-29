function tinhLuong() {
    // 1. Lấy dữ liệu từ các thẻ input
    let luong = document.getElementById("luongCoBan").value;
    let heSo = document.getElementById("heSoLuong").value;
    
    // 2. Thực hiện tính toán: Lương * Hệ số lương
    // Dùng Number() để đảm bảo các giá trị được xử lý như một con số
    let luongThang = Number(luong) * Number(heSo);
    
    // 3. Xuất kết quả ra thẻ td có id là "ketQua"
    document.getElementById("ketQua").innerText = luongThang;
}