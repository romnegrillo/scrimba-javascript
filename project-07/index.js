const washCarButtonEl = document.getElementById("wash-car-button")
const mowLawnButtonEl = document.getElementById("mow-lawn-button")
const pullWeedsButtonEl = document.getElementById("pull-weeds-button")
const invoiceListEl = document.getElementById("invoice-list")
const totalEl = document.getElementById("total-amount")
const sendInvoiceButtonEl = document.getElementById("send-invoice-button")

let taskList = {
    wash: {
        name: "Wash Car",
        price: 10
    },
    mow: {
        name: "Mow Lawn",
        price: 20
    },
    pull: {
        name: "Pull Weeds",
        price: 30
    }
}
let currentTask = {}

washCarButtonEl.addEventListener("click", function () {
    addTask("wash")
})

mowLawnButtonEl.addEventListener("click", function () {
    addTask("mow")
})

pullWeedsButtonEl.addEventListener("click", function () {
    addTask("pull")
})

sendInvoiceButtonEl.addEventListener("click", function () {
    clearTask()
})

function addTask(task) {
    currentTask[task] = {
        name: taskList[task].name,
        price: taskList[task].price
    }

    renderTask()
}

function clearTask() {
    currentTask = {}
    renderTask()
}

function getTotalPrice() {
    let totalPrice = 0
    for (let [key, value] of Object.entries(currentTask)) {
        totalPrice += value.price
    }

    return totalPrice
}

function removeTask(id) {
    delete currentTask[id]
    renderTask()
}

function addRemoveButtonListener() {
    let removeButtons = document.getElementsByClassName("remove-button")

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", () => removeTask(removeButtons[i].id))
    }
}

function renderTask() {

    let toDisplay = ""

    for (let [key, value] of Object.entries(currentTask)) {
        //console.log(key, value)
        toDisplay += `
            <div class="invoice-row">
                <div class="invoice-row--title">
                    <p class="text-medium">${value.name}</p>
                    <button class="text-extra-small text-grey remove-button" id=${key}>Remove</button>
                </div>
                <p class="text-medium"><span class="text-grey">$</span>${value.price}</p>
            </div>
        `
    }

    toDisplay += "<hr>"
    invoiceListEl.innerHTML = toDisplay
    totalEl.textContent = `$${getTotalPrice()}`

    addRemoveButtonListener()
}