let hour = document.querySelector('#hour')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
let half = document.querySelector('#half')

function setClock() {
    const now = moment()
    console.log(now);

    hour.innerHTML = now.hour();
    min.innerHTML = now.minute();
    sec.innerHTML = now.second();

    if (hour => 12) {
        half.textContent = 'pm'
    } else {
        half.textContent = 'am'
    }

}

setInterval(() => {
    setClock()
}, 1);



