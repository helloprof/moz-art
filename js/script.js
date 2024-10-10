console.log("Hello World");

let cards = document.querySelectorAll(".card-div")
// console.log(cards)
// card.addEventListener("click", function(){
//     console.log("Card clicked");
// })

cards.forEach((card) => {
    card.addEventListener("click", function(){
        let playButton = document.createElement("button")
        playButton.innerText = "PLAY"
        playButton.style.backgroundColor = "green"
        // rounded circle
        playButton.style.borderRadius = "50%"   
        card.appendChild(playButton)
    })
})


let nav = document.getElementById("nav")

let sidebar = document.createElement("div")
sidebar.innerText = "Sidebar"
sidebar.style.backgroundColor = "green" 

nav.appendChild(sidebar)

