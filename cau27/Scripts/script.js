function xoaDong(nutXoa) {
    // Phương thức closest('tr') tìm thẻ <tr> gần nhất bao bọc nút bấm hiện tại
    let dongCanXoa = nutXoa.closest('tr');
    
    // Nếu tìm thấy thẻ <tr>, tiến hành xóa dòng đó khỏi DOM
    if (dongCanXoa) {
        dongCanXoa.remove();
    }
}