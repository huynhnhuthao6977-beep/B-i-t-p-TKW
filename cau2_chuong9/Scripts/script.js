function getFormvalue(event) {
    if (event) {
        event.preventDefault();
    }
    let firstName = $('input[name="fname"]').val();
    let lastName = $('input[name="lname"]').val();

    alert("Họ và tên lấy được (bằng jQuery): " + firstName + " " + lastName);
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
}