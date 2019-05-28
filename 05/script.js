let student = {
  firstName: "Greg",
  lastName: "Narinsky",
  age: "180",
  interest: "девочками",
  profession: "Product designer",
  say: function() {
    console.log("Привет, меня зовут " + student.firstName + " " + student.lastName + " мне " + student.age + " лет, интересуюсь " + student.interest + ", а по профессии я " + student.profession + ".")
  }
}

student.say()



let inputName = document.querySelector('#name')
let inputSurname = document.querySelector('#surName')
let inputAge = document.querySelector('#age')
let inputInterest = document.querySelector('#interest')
let inputProfession = document.querySelector('#profession')
let firstTh = document.querySelector('#firstTh')
let secondTh = document.querySelector('#secondTh')
let thirdTh = document.querySelector('#thirdTh')
let fourthTh = document.querySelector('#fourthTh')
let fifthTh = document.querySelector('#fifthTh')
let button = document.querySelector('button')






button.onclick = function() {

  const inputArray = [inputName.value, inputSurname.value, inputAge.value, inputInterest.value, inputProfession.value]

  // firstTh.textContent = inputName.value
  // secondTh.textContent = inputSurname.value
  // thirdTh.textContent = inputAge.value
  // fourthTh.textContent = inputInterest.value
  // fifthTh.textContent = inputProfession.value

  const newTr = document.createElement('tr')

  const tBody = document.querySelector('tbody')


  for (let i = 0; i <= 4; i++) {

    const newTd = document.createElement('td')

    newTd.textContent = inputArray[i]

    newTr.appendChild(newTd)
  }

  tBody.appendChild(newTr)
}
