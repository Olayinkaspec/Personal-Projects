const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,birthYear;
    let birthInfo = {
        date:inputDate.getDate(),
        month:inputDate.getMonth() + 1,
        year:inputDate.getFullYear()
    }
    let presentYear = today.getFullYear();
    let presentMonth = today.getMonth() + 1;
    let presentDate = today.getDate();

    leapChecker(presentYear);

    if(
        birthInfo.year > presentYear || ( birthInfo.month > presentMonth && birthInfo.year == presentYear) ||
        (birthInfo.date > presentDate && birthInfo.month == presentMonth && birthInfo.year == presentYear)
    ) {
        alert("Not Born Yet");
        showResult("--","--","--",);
        return;
    }

    birthYear = presentYear - birthInfo.year;

    if (presentMonth >= birthInfo.month) {
        birthMonth = presentMonth - birthInfo.month;
    } else {
        birthYear--;
        birthMonth = 12 + presentMonth - birthInfo.month;
    }

    if (presentDate >= birthInfo.date) {
        birthDate = presentDate - birthInfo.date;
    } else {
        birthMonth--;
        let days = months[presentMonth - 2];
        birthDate = days + presentDate - birthInfo.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }
    showResult(birthDate,birthMonth,birthYear);
}

function showResult(birthDate,birthMonth,birthYear) {
    document.getElementById("years").textContent = birthYear;
    document.getElementById("months").textContent = birthMonth;
    document.getElementById("days").textContent = birthDate;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }
}