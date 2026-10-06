function removeColor(){
    let colorSelect = document.getElementById('colorSelect');
    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    } else {
        alert("Danh sách đã trống hoặc chưa có mục nào được chọn!");
    }
}