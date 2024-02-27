function verify() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorInfo = document.getElementById("error_info").value;

    errorInfo.style.padding = "10px";

    let error = [];

    if (name == []) {
        error += "Please enter a valid Name.\n";
    }

    if (subject == []) {
        error += "Please enter a valid Subject.\n";
    }

    if (isNaN(phone) || phone.length != 11) {
        error.push("Please enter a valid Phone Number");
    }

    if (email == []) {
        error += "Please enter a valid Email.\n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid Email.\n";
    }

    if (message == []) {
        error += "Please enter Message.\n";
    }

    if (error != []) {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}