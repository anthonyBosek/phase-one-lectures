console.log(APIKey)
const API = "https://api.tvmaze.com/singlesearch/shows"
const searchForm = document.querySelector("form.search-form")
const showDetailsDiv = document.querySelector(".show-details")
const showsList = document.querySelector(".shows-list")
const showH3 = document.querySelector("#title")
const showImg = document.querySelector("#image")
const showSpan = document.querySelector("#details")
const showP = document.querySelector("#description")

const displayShow = (showObj) => {
    showH3.textContent = showObj.name
    showImg.src = showObj?.image?.medium
    showImg.alt = showObj.name
    showSpan.textContent = `Premiered on ${showObj.premiered}, Ended on ${showObj.ended}, Avg Rating: ${showObj.rating.average}`
    showP.textContent = showObj.summary
    showDetailsDiv.classList.remove("collapsed")
}

const searchShows = (e) => {
    e.preventDefault()
    const userInput = e.target.show.value
    fetch(`${API}?q=${userInput}`)
    .then(resp => {
        if (resp.ok) {
            resp.json()
            .then(tvShowObj => displayShow(tvShowObj))
            // .then(displayShow)
        } else {
            alert("There was an error with your search")
        }
    })
    .catch(err => alert(err))
}

const attachSubmitToForm = () => {
    searchForm.addEventListener("submit", searchShows)
}

const appendShowToList = (showObj) => {
    const div = document.createElement("div")
    div.textContent = `${showObj.name} - Genres: ${showObj.genres.join(", ")}`
    div.addEventListener("click", e => displayShow(showObj))
    showsList.append(div)
}

const fetchAllShows = () => {
    fetch("https://api.tvmaze.com/shows")
    .then(resp => resp.json())
    .then(showsArray => showsArray.forEach(appendShowToList))
    .catch(err => alert(err))
}

//! Start Logic

attachSubmitToForm()
fetchAllShows()