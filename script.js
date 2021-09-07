const words = ['Developer', 'Web designer', 'blogger']
let i = 0
let j = 0
let currentWord = []
let isDeleting = false
let isEnd = false

function loop() {
  isEnd = false
  $('.text-type').html(currentWord)

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord.push(words[i][j])
      j++
      $('.text-type').html(currentWord)
    }

    if (isDeleting && j <= words[i].length) {
      currentWord.pop(words[i][j])
      j--
      $('.text-type').html(currentWord)
    }

    if (j == words[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentWord = []
      isDeleting = false
      i++
      if (i == words.length) {
        i = 0
      }
    }
  }

  const speedUp = 60
  const normalSpeed = 160
  const time = isEnd ? 900 : isDeleting ? speedUp : normalSpeed
  setTimeout(loop, time)
}

loop()
