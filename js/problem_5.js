const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here

function createListitem(word) {
    const li = document.createElement('li')
    li.textContent = word
    li.classList.add('list-group-item')
    return li
}

showRhymesButton.addEventListener('click', () => {
    rhymesOutput.innerHTML = ''
    getRhymes(wordInput.value, (resp) => {
        const rhymes = Object.values(resp)
        if (rhymes.length) {
            rhymes.forEach(rhyme => rhymesOutput.append(createListitem(rhyme.word)))
        } else {
            rhymesOutput.textContent = 'no rhymes'
        }
    
    })
})

clearButton.addEventListener('click', () => {
    wordInput.value = ''
    rhymesOutput.innerHTML = ''
})
