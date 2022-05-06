let player = {
    name: "Rom",
    chips: 2000
}
let cards = []
let sumCard = 0
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.getElementById("message")
const sumEl = document.querySelector("#sum")
const cardsEl = document.querySelector("#cards")
const playerEl = document.querySelector("#player")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)

    if (randomNumber >= 11 && randomNumber <= 13) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }

    return randomNumber
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sumCard = firstCard + secondCard

    playerEl.textContent = `${player.name}: ${player.chips}`

    renderGame()
}

function renderGame() {
    if (sumCard <= 20) {
        message = "Do you want to draw another card?"
    } else if (sumCard === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sumCard}`
    displayCards()
}

function displayCards() {
    let cardDisplay = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardDisplay += cards[i] + " "
    }

    cardsEl.textContent = cardDisplay
}

function drawCard() {

    if (isAlive && hasBlackJack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sumCard += newCard
    }

    renderGame()
}