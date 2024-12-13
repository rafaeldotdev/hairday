import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Define a data atual no input.
const inputTodayDate = dayjs(new Date()).format("YYYY-MM-DD")

// Atualiza a data no valor do input.
selectedDate.value = inputTodayDate

// Define a data miníma para selecionar no input do tipo DATE
selectedDate.min = inputTodayDate

// Define a data maxima para selecionar no input do tipo DATE
selectedDate.max = dayjs(new Date()).add(1, "week").format("YYYY-MM-DD")

form.onsubmit = (event) => {
  event.preventDefault()
}
