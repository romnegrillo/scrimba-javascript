let passwordEls = document.querySelectorAll(".password")
let charList = "";
let selectedPasswordLen = document.getElementById("password-len").value
let messageEl = document.getElementById("message")

for (let i = 32; i <= 126; i++) {
    charList += String.fromCharCode(i);
}


function isValidNumber(number) {
    return isNaN(parseFloat(number - 0)) ? false : true
}

function isValidPasswordLen() {
    let passwordLen = document.getElementById("password-len").value

    if (isValidNumber(passwordLen) && passwordLen >= 8 && passwordLen <= 20) {
        selectedPasswordLen = passwordLen
        return true
    } else {
        messageEl.textContent = "Password length must be between 8 - 20 characters"

        for (let i = 0; i < passwordEls.length; i++) {
            passwordEls[i].value = ""
        }
    }

    return false
}


function getRandomPassword() {
    let randomPass = ""

    for (let i = 0; i < selectedPasswordLen; i++) {
        randomPass += charList[Math.floor(Math.random() * charList.length)]
    }

    return randomPass
}

function generatePassword() {
    if (isValidPasswordLen()) {
        for (let i = 0; i < passwordEls.length; i++) {
            passwordEls[i].value = getRandomPassword()
        }
    }
}

function copyPassword(passwordElId) {
    let selectedPassword = document.getElementById(passwordElId)
    selectedPassword.select()
    navigator.clipboard.writeText(selectedPassword.value);

    messageEl.textContent = "Copied: " + selectedPassword.value
}