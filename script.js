let input = document.querySelector("#userInp")
let repoDiv = document.querySelector(".repos")
let searchButton = document.querySelector("#searchInp")

const makeCall = async () => {
  event.preventDefault()
  const resp = await axios.get(`https://api.github.com/users/${input.value}/repos`)

  for (let i = 0; i < resp.data.length-1; i++) {
    repoDiv.innerHTML += 
    `<li>${resp.data[i].name}</li>`
  }
  
}

// makeCall()

searchButton.addEventListener("click", makeCall)

// const testCall = async () => {
//   const resp = await axios.get("https://api.github.com/users/mileskc/repos")

//   console.log(resp.data[0].name)
// }

// testCall()