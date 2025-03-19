const init = () => {
  const inputform = document.querySelector("form")
  inputform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input = document.querySelector("input#searchByID")

    fetch('http://localhost:3000/movies/${input.value}')
    .then(response=>response.json())
    .then(data=>{

    const title= document.querySelector("section#movieDetails h4")
    const summary = document.querySelector("section#movieDetails p")

    title.innerText= title.data
    summary.innerText=summary.data
    
    })

    })
}

document.addEventListener('DOMContentLoaded', init);