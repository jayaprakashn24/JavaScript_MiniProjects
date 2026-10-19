function updateTime() {
    const currentTime = new Date();

    let hours = String(currentTime.getHours()).padStart(2, "0");
    let minutes = String(currentTime.getMinutes()).padStart(2, "0");
    let seconds = String(currentTime.getSeconds()).padStart(2, "0");

    document.getElementById("time").innerText =`${hours}:${minutes}:${seconds}`;

    let day = String(currentTime.getDate()).padStart(2, "0");
    let month = String(currentTime.getMonth() + 1).padStart(2, "0");
    let year = currentTime.getFullYear();

    document.getElementById("date").innerText =`${day}-${month}-${year}`;
}

updateTime();
setInterval(updateTime, 1000);