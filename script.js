const selectionButtons = document.querySelectorAll('[data-selection]')//1.
const finalColumn = document.querySelector('[data-final-column]')//14.
const computerScoreSpan = document.querySelector('[data-computer-score]')//17.
const yourScoreSpan = document.querySelector('[data-your-score]')//18.
const SELECTIONS = [//4.to save all the possible combinations in a global variable
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]

selectionButtons.forEach(s => {
  s.addEventListener('click', e => {
    const selectionName = s.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)//5.here we are passing
    //individual selections.
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  //console.log(selection)
  const computerSelection = randomSelection()
  //console.log(computerSelection)
  const yourWinner = isWinner(selection, computerSelection)//9.
  const computerWinner = isWinner(computerSelection, selection)//10.

  addSelectionResult(computerSelection, computerWinner)//12.first we are writing computer selection
  //and then only your selection because your selection should start appearing just after the 
  //computer text.not from below.if below,then we have to start seeing from down to above.1st result will
  //be pushed below and new result will apper above to it.
  addSelectionResult(selection, yourWinner)//13.

  if (yourWinner) incrementScore(yourScoreSpan)//20.
  if (computerWinner) incrementScore(computerScoreSpan)//21.
}

function incrementScore(scoreSpan) {//19.full function
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {//11.
  const div = document.createElement('div')//16.below 3 lines too
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)//15.
}

function isWinner(selection, opponentSelection) {//8.
  return selection.beats === opponentSelection.name
}

function randomSelection() {//6. this function selects randomly from computer side
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}
/*
2.
selectionButtons.forEach(s => {
  s.addEventListener('click', e => {
    const selectionName = s.dataset.selection
    makeSelection(selection)
  })
})
3. to check whether the selection button is working or not.it will print any 3 option name. either rock
paper or....
function makeSelection(selection) {
console.log(selection)
}
7.
function makeSelection(selection) {
const computerSelection = randomSelection()
console.log(computerSelection)
}
*/