let ct = 0

let counter = document.querySelector("#counter")
let btns = document.querySelectorAll(".btn")

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            ct--
        }
        else if(styles.contains('increase')) {
            ct++
        }
        else {
            ct = 0
        }
        if(ct > 0) {
            counter.style.color = 'green'
        }
        if(ct < 0) {
            counter.style.color = 'red'
        }
        if(ct === 0) {
            counter.style.color = 'black'
        }
        counter.textContent = ct
    })
})