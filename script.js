let input = document.querySelector("input")
// let user = input.value
let user = "mileskc"
let repoDiv = document.querySelector(".repos")
let searchButton = document.querySelector("#searchInp")

const makeCall = async () => {
  const resp = await axios.get(`https://api.github.com/users/${user}/repos`)

  console.log(resp)

  searchButton.addEventListener("click", ()=> {
    repoDiv.innerHTML += resp.data[0].name
  })
  
}

makeCall()

// const testCall = async () => {
//   const resp = await axios.get("https://api.github.com/users/mileskc/repos")

//   console.log(resp.data[0].name)
// }

// testCall()