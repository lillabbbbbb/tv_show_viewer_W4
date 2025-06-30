const submitButton = document.getElementById("submit-data")
let inputField = document.getElementById("input-show")
const containerDiv = document.getElementById("show-container")


submitButton.addEventListener("click", async() => {

    while(containerDiv.lastElementChild){
        containerDiv.removeChild(containerDiv.lastElementChild)
    }

    const url = "https://api.tvmaze.com/search/shows?q=" + inputField.value + "/";
    console.log("Search term: " + inputField.value)
    const showsPromise = await fetch(url)
    const showJSON = await showsPromise.json()
    console.log(showJSON)

    showJSON.forEach(show => {
        console.log(show)
        const showDiv = document.createElement("div")
        showDiv.setAttribute("class", "show-data")
        const img = document.createElement("img")
        const div = document.createElement("div")
        div.setAttribute("class", "show-info")
        const h1 = document.createElement("h1")
        let p = document.createElement("p")

        p.innerHTML = show.show.summary
        h1.innerText = show.show.name
        console.log(h1)
        img.src = show.show.image.medium


        console.log(div)
        div.appendChild(h1)
        div.appendChild(p)

        showDiv.appendChild(img)
        showDiv.appendChild(div)
        
        containerDiv.appendChild(showDiv)


        
    });


})