let counterValueEl = document.getElementById("counter-value")
let logEl = document.getElementById("counter-logs")
let counter = 0
let logElInitialText = "Logs: "

function incrementCounter() {
    counter += 1
    counterValueEl.textContent = counter
}

function saveCounter() {
    let prevLog = logEl.textContent
    //let newLog = prevLog + " " + counter
    let newLog = `${prevLog} ${counter}`
    
    logEl.textContent = newLog

    counter = 0
    counterValueEl.textContent = counter
}

function clearCounter() {
    counter = 0
    counterValueEl.textContent = counter

    logEl.textContent = logElInitialText
}