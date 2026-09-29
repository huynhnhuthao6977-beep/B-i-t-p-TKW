function xuatThu() {
    // 1. Lấy dữ liệu ngày, tháng, năm từ người dùng nhập
    let ngay = document.getElementById("ngay").value;
    let thang = document.getElementById("thang").value;
    let nam = document.getElementById("nam").value;

    // 2. Khởi tạo đối tượng Date. 
    // Lưu ý: Tháng trong JS bắt đầu từ 0 (0 = Tháng 1, 11 = Tháng 12) nên phải trừ đi 1.
    let dateObj = new Date(nam, thang - 1, ngay);

    // 3. Sử dụng hàm getDay() để lấy ra ngày trong tuần (0 = Chủ nhật, 1 = Thứ 2,..., 6 = Thứ 7)
    let thuIndex = dateObj.getDay();
    let tenThu = "";

    // 4. Chuyển đổi chỉ số thành chữ
    switch (thuIndex) {
        case 0: tenThu = "Chủ nhật"; break;
        case 1: tenThu = "Thứ 2"; break;
        case 2: tenThu = "Thứ 3"; break;
        case 3: tenThu = "Thứ 4"; break;
        case 4: tenThu = "Thứ 5"; break;
        case 5: tenThu = "Thứ 6"; break;
        case 6: tenThu = "Thứ 7"; break;
    }

    // 5. Nối chuỗi tạo ra kết quả hoàn chỉnh
    let chuoiKetQua = tenThu + " Ngày " + ngay + " tháng " + thang + " năm " + nam;

    // 6. Xuất ra màn hình
    document.getElementById("ketQua").innerText = chuoiKetQua;
}