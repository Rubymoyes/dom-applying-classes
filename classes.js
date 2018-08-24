
document.addEventListener('DOMContentLoaded', start)

function start () {
  one(), two (), three (), makeVisible ()
}

function one () {
  // Find the element
  var one = document.getElementById('one')

  // Apply a new CSS class to it:
  one.classList.add('blue')
}

// Function 2

function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
}

// Function 3

function three () {
  var three = document.getElementById('three')
  three.classList.add('purple')
}

// makeVisible

function makeVisible () {
  var makeVisible = document.getElementsByClassName('invisible')[0]
  makeVisible.classList.remove('invisible')[0]
  makeVisible.classList.add('visible')[0]
}

/* At first, I wasn't sure why my code wasn't working for this. I did look up some resources
on how to make it work. I was doing this:
  var makeVisible = document.getElementsByClassName('invisible')
  makeVisible.classList.remove('invisible')
  makeVisible.classList.add('visible')
Just a quick question, why is adding the [0] essential to making it work? :)
  over and out! 
  */

  
