function verify() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorInfo = document.getElementById("error_info").value;

    errorInfo.style.padding = "10px";

    let error = [];

    if (name.length < 5) {
        error.push("Please enter a valid Name");
    }

    if (subject.length < 8) {
        error.push("Please enter a valid Subject");
    }

    if (isNaN(phone) || phone.length != 11) {
        error.push("Please enter a valid Phone Number");
    }

    if (email.IndexOf("@") == -1 || email.length < 6) {
        error.push("Please enter a valid Email");
    }

    if (message.length <= 50) {
        error.push("Please enter more than 50 Characters");
    }

    if (error.length > 0) {
        errorInfo.innerHTML = error.join("<br>");
        return false;
    } else {
        alert(
            "Submitted");
        return true;
    }
}