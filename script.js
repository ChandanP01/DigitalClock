let time = document.getElementById('time')
let day = document.getElementById('day')
let midday = document.getElementById('midday')
let d = document.getElementById('date')

setInterval(() => {
    let date_now = new Date();
    let hr = date_now.getHours()
    let min = date_now.getMinutes()
    let sec = date_now.getSeconds()
    let middayValue = "AM"

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    middayValue = (hr >= 12) ? "PM" : "AM"

    if (hr == 0) {
        hr = 12
    }
    else if (hr > 12) {
        hr -= 12
    }

    hr = (hr < 10) ? `0${hr}` : hr;
    min = (min < 10) ? `0${min}` : min;
    sec = (sec < 10) ? `0${sec}` : sec;

    day.textContent = days[date_now.getDay()]
    time.textContent = `${hr}:${min}:${sec}`
    midday.textContent = middayValue
    d.textContent = `${date_now.getDate()} ${months[date_now.getMonth()]} ${date_now.getFullYear()} `;
}, 1000)