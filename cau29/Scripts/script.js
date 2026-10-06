function getFormvalue(event){
    event.preventDefault();

    let textForm = document.getElementById('form1');

    let firstName = textForm.elements['fname'].value;
    let lastName = textForm.elements['lname'].value;

    alert("Họ và tên lấy được là: " + firstName + " " + lastName);
}