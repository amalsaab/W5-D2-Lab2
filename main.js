let stopBtn = document.getElementById("stopButton")
let slowBtn = document.getElementById("slowButton")
let goBtn = document.getElementById("goButton")
let stopLight = document.getElementById("stopLight")
let slowLight = document.getElementById("slowLight")
let goLight = document.getElementById("goLight")

stopBtn.addEventListener('click', () => {
    goLight.style.backgroundColor = ""
    slowLight.style.backgroundColor = ""
    stopLight.style.backgroundColor = "red"
})
slowBtn.addEventListener('click', () => {
    stopLight.style.backgroundColor = ""
    goLight.style.backgroundColor = ""
    slowLight.style.backgroundColor = "yellow"
    
})
goBtn.addEventListener('click', () => {
    stopLight.style.backgroundColor = ""
    slowLight.style.backgroundColor = ""
    goLight.style.backgroundColor = "green"
})