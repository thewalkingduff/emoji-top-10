const emojiDiv = document.querySelector('#display-emojis')
const emojiInput = document.querySelector('#emoji-input')
const removeInput = document.querySelector('#remove-input')
const addRankInput = document.querySelector('#add-rank-input')

const addToFrontBtn = document.querySelector('#add-front-btn')
const addToEndBtn = document.querySelector('#add-end-btn')
const addAtSpecificRank = document.querySelector('#add-to-specific-rank')

const removeFirstBtn = document.querySelector('#remove-first-btn')
const removeLastBtn = document.querySelector('#remove-last-btn')
const removeSpecificEmojiBtn = document.querySelector('#remove-specific-emoji-btn')
const deleteAllBtn = document.querySelector('#delete-all')

// quick emoji buttons:
const happyEmojiBtn = document.querySelector('#happy-emoji-btn')

const sadEmojiBtn = document.querySelector('#sad-emoji-btn')
const sillyEmojiBtn = document.querySelector('#silly-emoji-btn')
const angryEmojiBtn = document.querySelector('#angry-emoji-btn')

let emojis = []

function renderEmojis() {
    emojiDiv.innerHTML = ''
    
        for(let i = 0; i < emojis.length; i++){
            emojiDiv.innerHTML += `${i + 1}. ${emojis[i]} `
        }   

    emojiInput.value = ''  
    addRankInput.value = ''
}
// add:
addToFrontBtn.addEventListener('click', () => {
    if(emojis.length < 10){
    emojis.unshift(emojiInput.value)
    renderEmojis()
    console.log(emojis);
    }
})
addToEndBtn.addEventListener('click', () => {
    if(emojis.length < 10){
    emojis.push(emojiInput.value)
    renderEmojis()
    console.log(emojis);
    }
})
addAtSpecificRank.addEventListener('click', () => {
    emojis.splice(addRankInput.value - 1, 0, emojiInput.value)
    renderEmojis()
    console.log(emojis);
})

// remove:
removeFirstBtn.addEventListener('click', () => {
    emojis.shift()
    renderEmojis()
    console.log(emojis);
})
removeLastBtn.addEventListener('click', () => {
    emojis.pop()
    renderEmojis()
    console.log(emojis);
})
deleteAllBtn.addEventListener('click', () => {
    emojiDiv.innerHTML = ''
    emojis = []
    emojiInput.value = ''
    console.log(emojis);
})
removeSpecificEmojiBtn.addEventListener('click', () => {
    emojis.splice(removeInput.value - 1, 1)
    renderEmojis()
    console.log(emojis);
})

// quick default emoji buttons:
happyEmojiBtn.addEventListener('click', () => {
    if(emojis.length < 10){
    emojis.push('🙂')
    renderEmojis()
    console.log(emojis);
    }
})
sadEmojiBtn.addEventListener('click', () => {
    if(emojis.length < 10){
    emojis.push('🙁')
    renderEmojis()
    console.log(emojis);
    }
})
sillyEmojiBtn.addEventListener('click', () => {
    if(emojis.length < 10){
    emojis.push('🤪')
    renderEmojis()
    console.log(emojis);
    }
})
angryEmojiBtn.addEventListener('click', () => {
    if(emojis.length < 10){
    emojis.push('😡')
    renderEmojis()
    console.log(emojis);
    }
})

