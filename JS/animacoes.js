const typing = document.querySelector('[data-js="typing"]')

const messages = ['Olá, ', 'meu nome é Eric Johnson e construo páginas web.']

let messageIndex = 0 
let characterIndex = 0
let currenteMessage = ''
let currentCharacters = ''

const type = () => {
    currenteMessage = messages[messageIndex]
    currentCharacters = currenteMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters
}

setInterval(type, 200)