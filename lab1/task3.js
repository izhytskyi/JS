function checkSignal() {
    let time = document.getElementById("timeInput").value;
    let timeArray = time.split(":");
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        document.getElementById("result").innerHTML = "Невірний формат часу";
        return;
    }

    if (minutes < 3 || (minutes >= 5 && minutes < 8)) {
        document.getElementById("result").innerHTML = "Світлофор показує зелений сигнал";
    } else {
        document.getElementById("result").innerHTML = "Світлофор показує червоний сигнал";
    }
}
