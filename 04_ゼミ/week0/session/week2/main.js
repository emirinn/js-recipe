const inputElement = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  tuika()
  kieru()
}

const tuika = function () {
  const card = document.createElement("div")
  const text = inputElement.value
  card.className = "card"
  card.textContent = text
  memocontainer.append(card)

  const sakujobutton = document.createElement("button")
  sakujobutton.id = "sakujo-button"
  sakujobutton.textContent = "削除"
  card.append(sakujobutton)

  sakujobutton.onclick = function () {
    card.remove()
  }
}
const kieru = function () {
  inputElement.value = ""
}
