let numberEl = document.getElementById("number")
let metersFeetEl = document.getElementById("meters-feet")
let litersGallonsEl = document.getElementById("liters-gallons")
let kgPounds = document.getElementById("kg-pounds")


function isValidNumber(number) {
    return isNaN(parseFloat(number - 0)) ? false : true
}

function convert() {
    
    let number = numberEl.value.trim()

    if (isValidNumber(number) && number != "") {

        number = parseFloat(number)

        let meters_feet = (number * 3.28084).toFixed(3)
        let feet_meters = (number / 3.28084).toFixed(3)
        let liters_gallons = (number * 0.264172).toFixed(3)
        let gallons_liters = (number / 0.264172).toFixed(3)
        let kilos_pound = (number * 2.20462).toFixed(3)
        let pound_kilos = (number / 2.20462).toFixed(3)

        metersFeetEl.textContent =
            `${number} meters = ${meters_feet} feet | ${number} feet = ${feet_meters} liters`

        litersGallonsEl.textContent =
            `${number} liters = ${liters_gallons} gallons | ${number} gellons = ${gallons_liters} liters`

        kgPounds.textContent =
            `${number} kilos = ${kilos_pound} pounds | ${number} pounds = ${pound_kilos} kilos`
    }
    else {
        metersFeetEl.textContent = "Invalid input"
        litersGallonsEl.textContent = "Invalid input"
        kgPounds.textContent = "Invalid input"
    }
}


convert()