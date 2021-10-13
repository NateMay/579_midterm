const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here

let clickCount = 0

clickCountButton.addEventListener('click', () => {
  clickCountButton.textContent = `You clicked the button ${++clickCount} time${addS(clickCount)}`
})
