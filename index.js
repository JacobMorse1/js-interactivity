console.log("hello world")

// grabbing stuff

const inputField = document.querySelector("input")
const formEl = document.querySelector("form")
const message = document.querySelector("#message")


//functions

function addMovie(event) {
    event.preventDefault()
    console.log(inputField.value)
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    const ulEl = document.querySelector("ul")
    ulEl.appendChild(movie)
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}

//combining functions w/ elements

formEl.addEventListener("submit", addMovie)