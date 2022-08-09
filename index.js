// Code your solutions in this file

function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    name[i] = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return name
}
writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )


function countDown() {
  let i = 10
  while (i >= 0) {
    console.log(i--)
  }
  return i
}

