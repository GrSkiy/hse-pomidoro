let button = document.querySelector('button')
let nav = document.querySelector('nav')
let logo = document.querySelector('.logo')
let span1 = document.querySelector('#one')
let span2 = document.querySelector('#two')
let span3 = document.querySelector('#three')

function toggleMenuVisible() {
  nav.classList.toggle('is-hidden')
  logo.style.display = 'none'
  span1.style.transform = "rotate(45deg)"
  span2.style.display = 'none'
  span3.style.transform = "rotate(-45deg)"

  anime({
    targets: '#first',
    top: '0',
    duration: '1500'
  });

  anime({
    targets: '#second',
    top: '0',
    duration: '1500',
    delay: '500'
  });

  anime({
    targets: '#third',
    top: '0',
    duration: '1500',
    delay: '1000'
  });

}

button.onclick = toggleMenuVisible
