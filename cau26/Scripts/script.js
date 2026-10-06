function tinhCanChi() {
    // Lấy giá trị từ ô nhập liệu năm
    let namInput = document.getElementById("namDuongLich").value;
    
    // Kiểm tra validate: Không được rỗng, phải là số, và phải lớn hơn 0
    if (namInput.trim() === "" || isNaN(namInput) || Number(namInput) <= 0 || !Number.isInteger(Number(namInput))) {
        alert("Vui lòng nhập một năm dương lịch hợp lệ (số nguyên dương)!");
        return; // Dừng hàm nếu dữ liệu không hợp lệ
    }

    let nam = Number(namInput);

    // Mảng chứa các giá trị Can (chu kỳ 10 năm)
    let mangCan = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    
    // Mảng chứa các giá trị Chi (chu kỳ 12 năm)
    let mangChi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    // Tính toán vị trí Can và Chi dựa trên phần dư
    let can = mangCan[nam % 10];
    let chi = mangChi[nam % 12];

    // Nối chuỗi kết quả (ví dụ: Ất + Mùi = Ất Mùi)
    // Chuyển chữ cái đầu của Chi thành chữ thường để giống với hình ảnh mẫu (Ất mùi)
    let chiFormat = chi.charAt(0).toLowerCase() + chi.slice(1);
    let ketQua = can + " " + chiFormat;

    // Hiển thị kết quả ra textbox
    document.getElementById("namAmLich").value = ketQua;
}